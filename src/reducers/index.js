import { combineReducers } from "redux";
import register from "./registerReducer";
import global from "./globalReducer";
import account from "./accountPageReducer";
import detalPage from "./detailsPagereducer";
import products from "./productsReducer";

export default combineReducers({
  register,
  global,
  account,
  detalPage,
  products
});
