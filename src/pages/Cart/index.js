import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from 'react-icons/md';

import { bindActionCreators } from 'redux';
import { formatPrice } from '../../utility/format';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total, CartContainer } from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th aria-label="empty" />
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th aria-label="empty" />
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong> {product.title} </strong>
                    <span> {product.priceFormatted} </span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>

                      <input type="number" readOnly value={product.amount} />

                      <button type="button" onClick={() => increment(product)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong> {product.subtotal} </strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button type="button">Buy now</button>

            <Total>
              <span>TOTAL: </span>
              <strong> {total} </strong>
            </Total>
          </footer>
        </>
      ) : (
        <Container>
          <CartContainer>
            <MdRemoveShoppingCart size={75} color="#999" />
            <span>Empty Cart</span>
          </CartContainer>
        </Container>
      )}
    </Container>
  );
}

const mapToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.amount * product.price,
      0,
    ),
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapToProps, mapDispatchToProps)(Cart);
