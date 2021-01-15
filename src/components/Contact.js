import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          Subscribe to our new comming cake and get a welcome discount of 10%!
        </h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae omnis inventore blanditiis itaque magnam tempore
            laboriosam nostrum aspernatur soluta beatae?
          </p>
          <form action="" className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            ></input>
            <button className="submit-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
  @media (max-width: 425px) {
    .contact-form {
      grid-template-columns: unset;
    }
    .form-input {
      border-right: 2px solid var(--clr-black);
      margin-bottom: 15px;
      text-align: center;
    }
    .submit-btn {
      width: 150px;
      margin: auto;
    }
    .form-input,
    .submit-btn {
      border-radius: var(--radius);
    }
  }
`;

export default Contact;
