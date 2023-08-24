import {
  FETCH_BRANDS_SUCCESS,
  FETCH_COLORS_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_SIZES_SUCCESS,
  FETCH_GENDER_SUCCESS,
  SET_FILTERED_PRODUCTS,
  FETCH_FILTERED_PRODUCTS_SUCCESS,
  FETCH_FILTERED_PRODUCTS_FAILURE,
} from "./FilterTypes";
export const fetchBrands = () => async (dispatch) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/shop/brand-list/");
    const data = await response.json();
    dispatch({ type: FETCH_BRANDS_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};
export const fetchColors = () => async (dispatch) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/shop/color-list/");
    const data = await response.json();
    dispatch({ type: FETCH_COLORS_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/shop/category-list/");
    const data = await response.json();
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
export const fetchSizes = () => async (dispatch) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/shop/size-list/");
    const data = await response.json();
    dispatch({ type: FETCH_SIZES_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching sizes:", error);
  }
};
export const fetchGender = () => async (dispatch) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/shop/gender-list/");
    const data = await response.json();
    dispatch({ type: FETCH_GENDER_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching gender:", error);
  }
};
// actions.js

export const fetchProducts = (filters) => async (dispatch) => {
  try {
    const queryParams = new URLSearchParams(filters);

    const response = await fetch(`http://127.0.0.1:8000/shop/product/?${queryParams.toString()}`);
    const data = await response.json();

    // Диспатчим действие, чтобы обновить состояние с товарами
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
  } catch (error) {
    // Обрабатываем ошибку
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', error: error.message });
  }
};


// actions/filterActions.js
// export const fetchFilteredProducts = (params) => async (dispatch) => {
//   try {
//     const response = await fetch(`http://127.0.0.1:8000/shop/product/?brand=${params.brand}&size=${params.size}`);
//     const data = await response.json();
//     dispatch({ type: FETCH_FILTERED_PRODUCTS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FETCH_FILTERED_PRODUCTS_FAILURE, payload: error });
//   }
// };
// export const fetchGender = (asd) => async (dispatch) => {
//   try {
//     const response = await fetch(`http://127.0.0.1:8000/shop/gender-list/?gender=мужчина&price=100${asd && 'gender=' + 'муж'}`);
//     const data = await response.json();
//     dispatch({ type: FETCH_GENDER_SUCCESS, payload: data });
//   } catch (error) {
//     console.error("Error fetching gender:", error);
//   }
// };
