import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
const CartItem = ({ id, image, name, amount, price, max }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "increase");
  };

  const decrease = () => {
    toggleAmount(id, "decrease");
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <h5 className="price-small">{price} €</h5>
        </div>
      </div>

      <h5 className="price">{price} €</h5>

      <div className="amount-btns">
        <button
          className={amount === 1 ? "amount-btn disabled" : "amount-btn"}
          onClick={decrease}
        >
          <FaMinus />
        </button>
        <h2 className="amount">{amount}</h2>
        <button
          className={amount >= max ? "amount-btn disabled" : "amount-btn"}
          onClick={increase}
        >
          <FaPlus />
        </button>
      </div>

      <h5 className="subtotal">{price * amount} €</h5>

      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 100px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100px;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .price-small {
    color: var(--clr-primary-5);
  }

  .amount-btns {
    display: grid;
    width: 75px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    h2 {
      margin-bottom: 0;
      font-size: 1rem;
    }
    button {
      background: transparent;
      border-color: transparent;
      cursor: pointer;
      padding: 1rem 0;
      width: 1rem;
      height: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
    }
    h2 {
      margin-bottom: 0;
    }
  }

  .disabled {
    opacity: 0.3;
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 100px;
    img {
      height: 100px;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 425px) {
    display: block;
    .title {
      display: block;
      img {
        height: 200px;
        margin-bottom: 10px;
      }
    }
    h5 {
      margin: 4px 0px 0px;
      text-align: center;
    }
    .amount-btns,
    .remove-btn {
      margin: 0px auto;
    }
  }
`;

export default CartItem;
