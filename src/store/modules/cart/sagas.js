import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { formatPrice } from '../../../utility/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id),
  );

  const stock = yield call(api.get, `/stock/${id}`);
  const currentStock = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const newAmount = currentAmount + 1;

  if (newAmount > currentStock) {
    toast.error('Unavaliable requested amount for this product.');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, newAmount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`);
  const currentStock = stock.data.amount;

  if (amount > currentStock) {
    toast.error('Unavaliable requested amount for this product.');
  } else {
    yield put(updateAmountSuccess(id, amount));
  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_REQUEST', updateAmount),
]);
