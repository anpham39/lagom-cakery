import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    producstLoading,
    productsError,
    featuredProducts,
  } = useProductsContext();

  if (producstLoading) {
    return <Loading />;
  } else if (productsError) {
    return <Error />;
  } else {
    return (
      <Wrapper className="section">
        <div className="title">
          <h2>Featured Products</h2>
          <div className="underline"></div>
        </div>

        <div className="section-center featured">
          {featuredProducts.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <Link to="/products" className="btn products-btn">
          View all cakes
        </Link>
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  text-align: center;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .products-btn {
    width: fit-content;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
