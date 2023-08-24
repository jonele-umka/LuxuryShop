// favoriteActions.js

// Типы экшенов
import {
  ADD_TO_FAVORITES_SUCCESS,
  ADD_TO_FAVORITES_FAILURE,
  LOAD_FAVORITES_SUCCESS,
  LOAD_FAVORITES_FAILURE,
  REMOVE_FROM_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES_FAILURE,
} from "./favoriteTypes";

export const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const loadFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (productId) => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    fetch("http://127.0.0.1:8000/shop/favorite-product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        product: productId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const updatedFavoritesItems = [...getState().favorites.favorites, data];
        saveFavoritesToLocalStorage(updatedFavoritesItems);
        dispatch(addToFavoritesSuccess(data));
        dispatch(loadFavorites()); // Перезагрузка корзины после добавления нового товара
      })
      .catch((error) => {
        dispatch(addToFavoritesFailure(error.message));
      });
  };
};

export const addToFavoritesSuccess = (product) => {
  return {
    type: ADD_TO_FAVORITES_SUCCESS,
    payload: product,
  };
};

export const addToFavoritesFailure = (error) => {
  return {
    type: ADD_TO_FAVORITES_FAILURE,
    payload: error,
  };
};

export const loadFavorites = () => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    fetch("http://127.0.0.1:8000/shop/favorite-product/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(loadFavoritesSuccess(data));
      })
      .catch((error) => {
        dispatch(loadFavoritesFailure(error.message));
      });
  };
};
export const loadFavoritesSuccess = (favorites) => {
  return (dispatch, getState) => {
    const addedItemIds = getState().favorites.favorites.map((item) => item.id); // Получаем идентификаторы уже добавленных товаров
    const filteredItems = favorites.filter((item) =>
      addedItemIds.includes(item.id)
    ); // Фильтруем только добавленные товары из полученного списка

    dispatch({
      type: LOAD_FAVORITES_SUCCESS,
      payload: filteredItems,
    });
  };
};

export const loadFavoritesFailure = (error) => {
  return {
    type: LOAD_FAVORITES_FAILURE,
    payload: error,
  };
};
export const removeFromFavorites = (itemId) => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    fetch(`http://127.0.0.1:8000/shop/favorite-product/${itemId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(removeFromFavoritesSuccess(itemId));
        const updatedFavorites = getState().favorites.favorites.filter(
          (item) => item.product_detail.id !== itemId
        );
        saveFavoritesToLocalStorage(updatedFavorites); // Обновление данных в localStorage
      })
      .catch((error) => {
        dispatch(removeFromFavoritesFailure(error.message));
      });
  };
};

export const removeFromFavoritesSuccess = (itemId) => {
  return {
    type: REMOVE_FROM_FAVORITES_SUCCESS,
    payload: itemId,
  };
};

export const removeFromFavoritesFailure = (error) => {
  return {
    type: REMOVE_FROM_FAVORITES_FAILURE,
    payload: error,
  };
};
export const isItemInFavorites = (favorites, itemId) => {
  return favorites.some((item) => item.product_detail.id === itemId);
};
