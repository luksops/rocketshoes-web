import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/img/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/rocketshoes-web/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/rocketshoes-web/cart">
        <div>
          <strong>My Cart</strong>
          <span> {cartSize} Itens </span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
