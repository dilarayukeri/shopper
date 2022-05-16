import { Alert } from "react-native";
import {
    GET_PRODUCTS_PROCESS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_BOOKS_SUCCESS,
    GET_ELECTRONICS_SUCCESS,
    GET_OUTDOOR_SUCCESS,
    GET_GARDEN_SUCCESS,
} from "../actionTypes";
import { AppDispatch } from "../configureStore";
import apiClient from "../../api/Endpoints";

export const getProductList = (page: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch({ type: GET_PRODUCTS_PROCESS });
            const response = await apiClient.getProducts(page);

            if (!response.isSuccessful) {
                dispatch({ type: GET_PRODUCTS_ERROR, payload: response.error });
                Alert.alert(response.error);
                return;
            }

            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("Error at getProducts: ", error);
            return dispatch({ type: GET_PRODUCTS_ERROR, payload: error });
        }
    };
};

export const getBooks = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await apiClient.getProductByCategory("Books");

            if (!response.isSuccessful) {
                console.log("Error at getProducts: ", response);
                return;
            }

            dispatch({ type: GET_BOOKS_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("Error at getProducts: ", error);
        }
    };
};

export const getElectronics = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await apiClient.getProductByCategory(
                "Electronics",
            );

            if (!response.isSuccessful) {
                console.log("Error at getProducts: ", response);
                return;
            }

            dispatch({ type: GET_ELECTRONICS_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("Error at getProducts: ", error);
        }
    };
};

export const getOutdoors = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await apiClient.getProductByCategory("Outdoors");

            if (!response.isSuccessful) {
                console.log("Error at getProducts: ", response);
                return;
            }

            dispatch({ type: GET_OUTDOOR_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("Error at getProducts: ", error);
        }
    };
};

export const getGarden = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await apiClient.getProductByCategory("Garden");

            if (!response.isSuccessful) {
                console.log("Error at getProducts: ", response);
                return;
            }

            dispatch({ type: GET_GARDEN_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("Error at getProducts: ", error);
        }
    };
};
