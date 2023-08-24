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

const initialState = {
  items: [],
  loading: false,
  error: null,
  selectedImages: {},
  selectedColors: {},
  selectedSizes: {},
  selectedProductChildrenIds: {},
  searchResults: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SELECT_COLOR:
      return {
        ...state,
        selectedColors: {
          ...state.selectedColors,
          [action.payload.productId]: action.payload.color,
        },
      };
    case SELECT_IMAGE:
      return {
        ...state,
        selectedImages: {
          ...state.selectedImages,
          [action.payload.productId]: action.payload.image,
        },
      };
    case SELECT_SIZE:
      return {
        ...state,
        selectedSizes: {
          ...state.selectedSizes,
          [action.payload.productId]: action.payload.size,
        },
      };

    case SELECT_PRODUCT_CHILDREN_ID:
      return {
        ...state,
        selectedProductChildrenIds: {
          ...state.selectedProductChildrenIds,
          [action.payload.productId]: action.payload.productChildrenId,
        },
      };
    case SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.payload,
        error: null,
      };
    case SEARCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        searchResults: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSelectedSizes = (state) => state.selectedSizes;
export const getSelectedColors = (state) => state.selectedColors;
export default ProductReducer;
