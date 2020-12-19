import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import { ProductList } from './styles';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utility/format';
import api from '../../services/api';
// import { Container } from './styles';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddToCart = (id) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { quantity } = this.props;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong> {product.title} </strong>
            <span> {product.priceFormatted} </span>

            <button
              type="button"
              onClick={() => this.handleAddToCart(product.id)}
            >
              <div>
                <MdShoppingCart size={16} color="#fff" />{' '}
                {quantity[product.id] || 0}
              </div>

              <span> ADD TO CART </span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = (state) => ({
  quantity: state.cart.reduce((quantity, product) => {
    quantity[product.id] = product.amount;

    return quantity;
  }, {}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
