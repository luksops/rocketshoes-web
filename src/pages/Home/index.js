import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

// import { Container } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis Legal</strong>
        <span>R$ 129,20</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis Legal</strong>
        <span>R$ 129,20</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis Legal</strong>
        <span>R$ 129,20</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis Legal</strong>
        <span>R$ 129,20</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis Legal</strong>
        <span>R$ 129,20</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
          alt="Tenis"
        />
        <strong>Tenis Legal</strong>
        <span>R$ 129,20</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
