import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProduct } from "../actions/productActions";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProduct
})

export default reducers;