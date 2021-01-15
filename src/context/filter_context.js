import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  filteredProducts: [],
  allProducts: [],
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    flavour: "all",
    minPrice: 0,
    maxPrice: 0,
    price: "",
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = async (e) => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "category" || name === "flavour") {
      value = e.target.textContent;
    }
    if (name === "price") {
      value = Number(value);
    }
    await dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    filterProducts();
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const filterProducts = () => {
    dispatch({ type: FILTER_PRODUCTS });
  };

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, updateFilters, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
