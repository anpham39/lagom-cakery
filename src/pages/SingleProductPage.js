import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const SingleProductPage = () => {
  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext();
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  useEffect(() => {
    setLoading(false);
  }, [singleProduct]);

  useEffect(() => {
    if (singleProductError || !singleProduct) {
      setTimeout(() => {
        history.push("/products");
      }, 3000);
    }
  }, [singleProductError, singleProduct]);

  if (singleProductLoading || loading) {
    return <Loading />;
  } else if (singleProductError || !singleProduct) {
    return <Error />;
  } else {
    const {
      id,
      flavour,
      description,
      images,
      name,
      price,
      reviews,
      stars,
      stock,
    } = singleProduct;
    return (
      <Wrapper>
        <PageHero title={name} product={true} />
        <div className="section section-center page">
          <Link to="/products" className="btn">
            Back to products list
          </Link>

          <div className="product-center">
            <ProductImages images={images} />

            <section className="content">
              <h2>{name}</h2>
              <div className="stars">
                {Array.from(Array(5), (e, index) => {
                  const number = index + 0.5;
                  return (
                    <span key={index}>
                      {stars >= index + 1 ? (
                        <BsStarFill />
                      ) : stars >= number ? (
                        <BsStarHalf />
                      ) : (
                        <BsStar />
                      )}
                    </span>
                  );
                })}
                <span> ({reviews} reviews)</span>
              </div>
              <h5 className="price">{price / 100}€</h5>
              <p className="desc">{description}</p>
              <p className="info">
                <span>Available: </span>
                {stock > 0 ? `${stock} items in stock` : "Out of stock"}
              </p>
              <p className="info">
                <span>Product ID: </span>
                {id}
              </p>
              <p className="info">
                <span>Main flavour: </span>
                {flavour}
              </p>
              <hr />
              {stock > 0 && <AddToCart product={singleProduct} />}
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  .stars {
    display: flex;
    align-items: center;
    span {
      color: #ffb900;
      font-size: 1rem;
      margin-right: 0.25rem;
    }
    p {
      margin-left: 0.5rem;
      margin-bottom: 0;
    }
    margin-bottom: 0.5rem;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 425px) {
    .content .info {
      display: block;
    }
  }
`;

export default SingleProductPage;
