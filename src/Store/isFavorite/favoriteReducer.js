// favoriteReducer.js

import {
  ADD_TO_FAVORITES_SUCCESS,
  ADD_TO_FAVORITES_FAILURE,
  LOAD_FAVORITES_SUCCESS,
  LOAD_FAVORITES_FAILURE,
  REMOVE_FROM_FAVORITES_SUCCESS,
} from "./favoriteTypes";
import { loadFavoritesFromLocalStorage } from "./favoriteAction";

const initialState = {
  favorites: loadFavoritesFromLocalStorage(),
  error: null,
  uniqueItems: [], // Массив уникальных товаров в корзине
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES_SUCCESS:
      const newItem = action.payload;
      const isItemInFavorites = state.uniqueItems.some(
        (item) => item.id === newItem.id
      );
      if (!isItemInFavorites) {
        // Если товара нет в корзине, добавляем его и обновляем список уникальных товаров
        return {
          ...state,
          favorites: [...state.favorites, newItem],
          uniqueItems: [...state.uniqueItems, newItem],
        };
      }
      // Если товар уже присутствует в корзине, ничего не меняем
      return {
        ...state,
      };

    case ADD_TO_FAVORITES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case LOAD_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.payload, // Загрузка всех элементов корзины
        error: null,
      };

    case LOAD_FAVORITES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case REMOVE_FROM_FAVORITES_SUCCESS:
      const itemId = action.payload;
      // Удаляем товар из favorites и uniqueItems
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.product_detail.id !== itemId
        ),
        uniqueItems: state.uniqueItems.filter(
          (item) => item.product_detail.id !== itemId
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
