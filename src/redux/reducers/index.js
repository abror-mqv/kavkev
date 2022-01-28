import { combineReducers } from "redux";
import { setCart } from "../actions/productsActions";
import { productsReducer, selectedProductsReducer, setCartReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: setCartReducer
});
export default reducers;
