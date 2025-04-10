import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { totalPrice } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h4>
            Order total: <span>{totalPrice} €</span>
          </h4>
        </article>

        {myUser ? (
          <Link to="/checkout" className="btn">
            Proceed to checkout
          </Link>
        ) : (
          <button className="btn" onClick={loginWithRedirect}>
            Login to proceed
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    margin-bottom: 0px;
  }
  p {
    text-transform: capitalize;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
`;

export default CartTotals;
