// ProductAction.js

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SELECT_IMAGE,
  SELECT_SIZE,
  SELECT_COLOR,
  SELECT_PRODUCT_CHILDREN_ID,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE,
} from "./ProductTypes";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());

    fetch("http://127.0.0.1:8000/shop/product/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Не удалось получить товары");
        }
      })
      .then((data) => {
        dispatch(fetchProductsSuccess(data.results));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const selectColor = (color, productId) => {
  return {
    type: SELECT_COLOR,
    payload: {
      color,
      productId,
    },
  };
};
export const selectImage = (image, productId) => {
  return {
    type: SELECT_IMAGE,
    payload: { image, productId },
  };
};

export const selectSize = (size, productId) => {
  return {
    type: SELECT_SIZE,
    payload: { size, productId },
  };
};

export const selectProductChildrenId = (productChildrenId, productId) => {
  return {
    type: SELECT_PRODUCT_CHILDREN_ID,
    payload: {
      productChildrenId,
      productId,
    },
  };
};

export const searchProducts = (search) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_PRODUCTS_REQUEST });

    fetch(
      `http://127.0.0.1:8000/shop/product/?search=${encodeURIComponent(search)}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('searchResults', JSON.stringify(data));
        dispatch({
          type: SEARCH_PRODUCTS_SUCCESS,
          payload: data,
        });
        return data;
      })
      .catch((error) => {
        dispatch({
          type: SEARCH_PRODUCTS_FAILURE,
          payload: error.message,
        });
        throw error;
      });
  };
};
