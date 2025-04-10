import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div>
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Lagom Cakery </span>
        </h5>
        <h5>All rights reserved</h5>
      </div>

      <h5>This website is a portfolio project showcasing the products. The real bakery is active at IG: @lagom.cakery .</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-black);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-items: center;
  align-items: center;
  padding: 1.5rem;
  div {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
  }
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
