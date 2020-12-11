import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

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

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong> {product.title} </strong>
            <span> {product.priceFormatted} </span>

            <button type="button">
              <div>
                <MdShoppingCart size={16} color="#fff" /> 3
              </div>

              <span> ADICIONAR AO CARRINHO </span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default Home;
