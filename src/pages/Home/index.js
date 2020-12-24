import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { bindActionCreators } from 'redux';
import { ProductList, Container } from './styles';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utility/format';
import api from '../../services/api';
// import { Container } from './styles';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await api.get('products');
    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
      loading: false,
    });
  }

  handleAddToCart = (id) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products, loading } = this.state;
    const { quantity } = this.props;

    return loading ? (
      <Container loading={loading ? 1 : 0}>
        <FaSpinner size={70} color="#fff" />
        <span>Loading</span>
      </Container>
    ) : (
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
