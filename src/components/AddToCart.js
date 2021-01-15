import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { FaPlus, FaMinus } from "react-icons/fa";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock } = product;
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1;
      if (newAmount > stock) {
        newAmount = stock;
      }
      return newAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <Wrapper>
      <div className="amount-btns">
        <button
          className={amount === 1 ? "amount-btn disabled" : "amount-btn"}
          onClick={decrease}
        >
          <FaMinus />
        </button>
        <h2 className="amount">{amount}</h2>
        <button
          className={amount >= stock ? "amount-btn disabled" : "amount-btn"}
          onClick={increase}
        >
          <FaPlus />
        </button>
      </div>
      <div className="btn-container">
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, amount, product)}
        >
          Add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }

  .amount-btns {
    display: grid;
    width: 140px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    h2 {
      margin-bottom: 0;
    }
    button {
      background: transparent;
      border-color: transparent;
      cursor: pointer;
      padding: 1rem 0;
      width: 2rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h2 {
      margin-bottom: 0;
    }
  }
  .disabled {
    opacity: 0.3;
  }
  @media (max-width: 425px) {
    text-align: center;
    .amount-btns {
      margin: auto;
    }
  }
`;
export default AddToCart;
