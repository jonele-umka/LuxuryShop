// reducers.js
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

const initialState = {
  filteredProducts: [],
  brands: [],
  colors: [],
  categories: [],
  sizes: [],
  gender: [],
  error: null,
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.payload,
      };
    case FETCH_COLORS_SUCCESS:
      return {
        ...state,
        colors: action.payload,
      };
    case FETCH_GENDER_SUCCESS:
      return {
        ...state,
        gender: action.payload,
      };
    case FETCH_SIZES_SUCCESS:
      return {
        ...state,
        sizes: action.payload,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return state; // или обработайте ошибку, если это необходимо
    // ...другие обработчики
    // case FETCH_FILTERED_PRODUCTS_SUCCESS:
    //   return { ...state, filteredProducts: action.payload, error: null };
    // case FETCH_FILTERED_PRODUCTS_FAILURE:
    //   return { ...state, filteredProducts: [], error: action.payload };

    default:
      return state;
  }
};

export default FilterReducer;
