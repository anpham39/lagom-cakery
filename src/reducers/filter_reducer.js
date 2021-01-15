import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: {
        ...state.filters,
        maxPrice: maxPrice,
        price: maxPrice,
      },
    };
  }

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === SORT_PRODUCTS) {
    let tempProducts = [...state.filteredProducts];
    if (state.sort === "price-lowest") {
      tempProducts.sort((a, b) => a.price - b.price);
    } else {
      tempProducts.sort((a, b) => b.price - a.price);
    }

    return { ...state, filteredProducts: [...tempProducts] };
  }

  if (action.type === UPDATE_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    var tempProducts = [...state.allProducts];
    const { text, category, flavour, price } = state.filters;
    tempProducts = tempProducts.filter(
      (product) =>
        (!text || product.name.toLowerCase().includes(text.toLowerCase())) &&
        (category === "all" || product.category === category) &&
        (flavour === "all" || product.flavour.includes(flavour)) &&
        product.price <= price
    );

    return {
      ...state,
      filteredProducts: tempProducts,
    };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filteredProducts: [...state.allProducts],
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        flavour: "all",
        price: state.filters.maxPrice,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
