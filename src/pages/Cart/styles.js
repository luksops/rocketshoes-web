import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  @media (max-width: 630px) {
    overflow: auto;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.5s;

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: center;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    img {
      height: 100px;
    }

    strong {
      color: #333;
      display: block;
      text-align: center;
    }

    span {
      display: block;
      margin-top: 5px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
      }
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
      display: flex;
      align-items: center;

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 20px;
    margin-left: 5px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 10px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: #999;
  }
`;
