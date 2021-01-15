import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id);
    // If item is already in cart
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        const newAmount = item.amount + amount;
        if (item.id === id && newAmount <= item.max) {
          item.amount = newAmount;
          return item;
        } else {
          return item;
        }
      });

      return { ...state, cart: tempCart };
      // If item is not in the cart yet
    } else {
      const newItem = {
        id,
        amount,
        name: product.name,
        image: product.images[0],
        price: product.price,
        max: product.stock,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "increase" && item.amount + 1 <= item.max) {
          item.amount += 1;
        }
        if (value === "decrease" && item.amount - 1 > 0) {
          item.amount -= 1;
        }
      }
      return item;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    let itemCount = 0;
    let priceCal = 0;
    state.cart.map((item) => {
      itemCount += item.amount;
      priceCal += item.price * item.amount;
    });

    return { ...state, totalItems: itemCount, totalPrice: priceCal };
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    localStorage.removeItem("cart");
    return { cart: [], totalPrice: 0, totalItems: 0 };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
