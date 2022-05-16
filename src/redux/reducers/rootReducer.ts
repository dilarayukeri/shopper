import { combineReducers } from "redux";
import product from "./productReducer";

export const rootReducer = combineReducers({
    product,
});
