import {
    GET_PRODUCTS_PROCESS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_BOOKS_SUCCESS,
    GET_ELECTRONICS_SUCCESS,
    GET_OUTDOOR_SUCCESS,
    GET_GARDEN_SUCCESS,
} from "../actionTypes";
import { AnyAction } from "redux";

const INITIAL_STATE = {
    getProductsProcess: false,
    products: [],
    getProductError: null,
    electronics: null,
    outdoors: null,
    garden: null,
};

export default (state = INITIAL_STATE, action: AnyAction) => {
    const { type, payload } = action;

    if (type === GET_PRODUCTS_PROCESS) {
        return {
            ...state,
            getProductsProcess: true,
        };
    }

    if (type === GET_PRODUCTS_SUCCESS) {
        return {
            ...state,
            getProductsProcess: false,
            products: [...state.products, ...payload],
            getProductError: null,
        };
    }

    if (type === GET_PRODUCTS_ERROR) {
        return {
            ...state,
            getProductsProcess: false,
            products: null,
            getProductError: payload,
        };
    }

    if (type === GET_BOOKS_SUCCESS) {
        return {
            ...state,
            books: payload,
        };
    }

    if (type === GET_ELECTRONICS_SUCCESS) {
        return {
            ...state,
            electronics: payload,
        };
    }

    if (type === GET_OUTDOOR_SUCCESS) {
        return {
            ...state,
            outdoors: payload,
        };
    }

    if (type === GET_GARDEN_SUCCESS) {
        return {
            ...state,
            garden: payload,
        };
    }

    return state;
};
