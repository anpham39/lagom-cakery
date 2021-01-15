import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [] }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  useEffect(() => {
    setMainImg(images[0]);
  }, [images]);

  return (
    <Wrapper>
      <img src={mainImg} alt="Product image" className="main" />

      <div className="gallery">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt={img.filename}
              className={`${img === mainImg ? "active" : null}`}
              onClick={() => setMainImg(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    img {
      height: 150px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 100px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 175px;
      }
    }
  }
`;

export default ProductImages;
