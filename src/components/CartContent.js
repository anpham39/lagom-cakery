import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <hr />

      <div className="link-container">
        <Link to="/products" className="link-btn">
          Continue shopping
        </Link>
        <button className="link-btn clear-btn" onClick={clearCart}>
          Clear cart
        </button>
      </div>

      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
    font-size: 16px;
  }
  .clear-btn {
    background: var(--clr-black);
  }
  @media (max-width: 375px) {
    .link-btn {
      font-size: 0.75rem;
      text-align: center;
    }

    article {
      padding: 1rem;
      h4 {
        grid-template-columns: calc(90vw - 93px) 1fr;
        font-size: 1rem;
      }
    }
  }
`;
export default CartContent;
