import React from "react";
import { useFilterContext } from "../context/filter_context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { filteredProducts } = useFilterContext();
  if (filteredProducts.length === 0) {
    return <h5>Sorry, no products matched your seach</h5>;
  } else {
    return (
      <Wrapper>
        {filteredProducts.map((product) => {
          const { id, images, name, price, description } = product;
          return (
            <article key={id}>
              <img src={images[0]} alt="name" />
              <div>
                <h4>{name}</h4>
                <h5 className="price">{price} €</h5>
                <p>{description.substring(0, 120)}...</p>
                <Link to={`/products/${id}`} className="btn">
                  Details
                </Link>
              </div>
            </article>
          );
        })}
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
    color: var(--clr-grey-3);
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.75rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ProductList;
