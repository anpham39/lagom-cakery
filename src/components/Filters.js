import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";

const Filters = () => {
  const {
    filters: { text, category, flavour, minPrice, maxPrice, price },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    return ["all", ...new Set(unique)];
  };

  const categories = getUniqueValues(allProducts, "category");
  const flavours = getUniqueValues(allProducts, "flavour");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              className="search-input"
              placeholder="search"
              value={text}
              onChange={updateFilters}
            />
          </div>

          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className={category === item ? "active" : null}
                    onClick={updateFilters}
                    name="category"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-control">
            <h5>flavour</h5>
            <div>
              {flavours.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className={flavour === item ? "active" : null}
                    onClick={updateFilters}
                    name="flavour"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{price / 100} €</p>
            <input
              type="range"
              name="price"
              value={price}
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
            />
          </div>
        </form>

        <button className="clear-btn" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .flavour {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
