import React from "react";
import { useFilterContext } from "../context/filter_context";
import styled from "styled-components";
const Sort = () => {
  const { filteredProducts, sort, updateSort } = useFilterContext();
  return (
    <Wrapper>
      <p>{filteredProducts.length} products found</p>
      <hr />

      <form action="">
        <label htmlFor="sort">Sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">Price (lowest)</option>
          <option value="price-highest">Price (highest)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 1.5rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 1.5rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .sort-input {
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    margin-left: 10px;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
