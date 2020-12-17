import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart }) {
  return (
    <Container>
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
                <strong> Tenis Muito MAssa </strong>
                <span> {product.priceFormatted} </span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>

                  <input type="number" readOnly value={product.ammount} />

                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong> R$259,80</strong>
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
          <span>TOTAL</span>
          <strong> R$1920,27</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapToProps, mapDispatchToProps)(Cart);
