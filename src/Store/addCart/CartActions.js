import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  LOAD_CART_SUCCESS,
  LOAD_CART_FAILURE,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  DECREASE_QUANTITY_SUCCESS,
  DECREASE_QUANTITY_FAILURE,
  INCREASE_QUANTITY_SUCCESS,
  INCREASE_QUANTITY_FAILURE,
} from "./CartTypes";
import { toast } from "react-toastify";

export const addToCart = (
  productId,
  productChildrenId,
  color,
  size,
  image,
  quantity
) => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    fetch("http://127.0.0.1:8000/cart/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        product: productId,
        product_children: productChildrenId,
        color: color,
        size: size,
        image: image,
        quantity: quantity || 1,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          throw new Error("Необходимо зарегистрироваться");
        } else {
          throw new Error("Ошибка при добавлении товара в корзину");
        }
      })
      .then((data) => {
        console.log(data);
        toast.success("Вы добавили товар в корзину");
        dispatch(addToCartSuccess(data));
        const updatedCartItems = [...getState().cart.cartItems, data];
        saveCartToLocalStorage(updatedCartItems);
        dispatch(loadCart()); // Перезагрузка корзины после добавления нового товара
      })
      .catch((error) => {
        toast.error(error.message); // Отображение ошибки в виде toast
        dispatch(addToCartFailure(error.message));
      });
  };
};

export const addToCartSuccess = (product) => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: product,
  };
};

export const addToCartFailure = (error) => {
  return {
    type: ADD_TO_CART_FAILURE,
    payload: error,
  };
};

export const loadCart = () => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    fetch("http://127.0.0.1:8000/cart/list/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(loadCartSuccess(data));
      })
      .catch((error) => {
        // toast.error(error.message); // Отображение ошибки в виде toast
        dispatch(loadCartFailure(error.message));
      });
  };
};

export const loadCartSuccess = (cartItems) => {
  return (dispatch, getState) => {
    const addedItemIds = getState().cart.cartItems.map((item) => item.id); // Получаем идентификаторы уже добавленных товаров
    const filteredItems = cartItems.filter((item) =>
      addedItemIds.includes(item.id)
    ); // Фильтруем только добавленные товары из полученного списка

    dispatch({
      type: LOAD_CART_SUCCESS,
      payload: filteredItems,
    });
  };
};

export const loadCartFailure = (error) => {
  return {
    type: LOAD_CART_FAILURE,
    payload: error,
  };
};

export const removeFromCart = (itemId) => {
  return (dispatch, getState) => {
    const token = getState().user.token;

    fetch(`http://127.0.0.1:8000/cart/delete/${itemId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(removeFromCartSuccess(itemId));
      })
      .catch((error) => {
        dispatch(removeFromCartFailure(error.message));
      });
  };
};

export const removeFromCartSuccess = (itemId) => {
  return {
    type: REMOVE_FROM_CART_SUCCESS,
    payload: itemId,
  };
};

export const removeFromCartFailure = (error) => {
  return {
    type: REMOVE_FROM_CART_FAILURE,
    payload: error,
  };
};
export const increaseQuantity = (itemId) => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    fetch(`http://127.0.0.1:8000/cart/add_one/${itemId}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`add: ${data}`);
        dispatch(increaseQuantitySuccess(itemId));
      })
      .catch((error) => {
        dispatch(increaseQuantityFailure(error.message));
      });
  };
};

export const increaseQuantitySuccess = (itemId) => {
  return {
    type: INCREASE_QUANTITY_SUCCESS,
    payload: itemId,
  };
};

export const increaseQuantityFailure = (error) => {
  return {
    type: INCREASE_QUANTITY_FAILURE,
    payload: error,
  };
};

export const decreaseQuantity = (itemId) => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    fetch(`http://127.0.0.1:8000/cart/reduce_one/${itemId}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(decreaseQuantitySuccess(itemId));
      })
      .catch((error) => {
        dispatch(decreaseQuantityFailure(error.message));
      });
  };
};

export const decreaseQuantitySuccess = (itemId) => {
  return {
    type: DECREASE_QUANTITY_SUCCESS,
    payload: itemId,
  };
};

export const decreaseQuantityFailure = (error) => {
  return {
    type: DECREASE_QUANTITY_FAILURE,
    payload: error,
  };
};
export const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const loadCartFromLocalStorage = () => {
  const cartItems = localStorage.getItem("cartItems");
  return cartItems ? JSON.parse(cartItems) : [];
};
