// import {
//   ADD_TO_CART_SUCCESS,
//   ADD_TO_CART_FAILURE,
//   LOAD_CART_SUCCESS,
//   LOAD_CART_FAILURE,
//   DECREASE_QUANTITY,
//   INCREASE_QUANTITY,
//   REMOVE_FROM_CART_SUCCESS,
// } from "./CartTypes";

// const initialState = {
//   cartItems: [], // Изначально пустой массив
//   error: null,
//   uniqueItems: [],
// };

// const СartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART_SUCCESS:
//       const newItem = action.payload;
//       const isItemInCart = state.uniqueItems.some(
//         (item) => item.id === newItem.id
//       );

//       if (!isItemInCart) {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, newItem],
//           uniqueItems: [...state.uniqueItems, newItem],
//         };
//       }

//       return state;

//     case ADD_TO_CART_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     case LOAD_CART_SUCCESS:
//       return {
//         ...state,
//         cartItems: action.payload, // Загрузка всех элементов корзины
//         error: null,
//       };
//     case LOAD_CART_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     case REMOVE_FROM_CART_SUCCESS:
//       const itemId2 = action.payload;

//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== itemId),
//         uniqueItems: state.uniqueItems.filter((item) => item.id !== itemId),
//       };

//     case INCREASE_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === action.payload
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };

//     case DECREASE_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };

//     default:
//       return state;
//   }
// };

// export default СartReducer;
import {
  ADD_TO_CART_SUCCESS, // Действие: успешное добавление товара в корзину
  ADD_TO_CART_FAILURE, // Действие: неудачное добавление товара в корзину
  LOAD_CART_SUCCESS, // Действие: успешная загрузка корзины
  LOAD_CART_FAILURE, // Действие: неудачная загрузка корзины
  REMOVE_FROM_CART_SUCCESS, // Действие: успешное удаление товара из корзины
  INCREASE_QUANTITY_SUCCESS, // Действие: успешное увеличение количества товара
  DECREASE_QUANTITY_SUCCESS, // Действие: успешное уменьшение количества товара
} from "./CartTypes";
import { loadCartFromLocalStorage } from "./CartActions";
const initialState = {
  cartItems: loadCartFromLocalStorage(),
  error: null, // Ошибка (если есть)
  uniqueItems: [], // Массив уникальных товаров в корзине
};

const СartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      const newItem = action.payload;
      const isItemInCart = state.uniqueItems.some(
        (item) => item.id === newItem.id
      );

      if (!isItemInCart) {
        // Если товара нет в корзине, добавляем его и обновляем список уникальных товаров
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          uniqueItems: [...state.uniqueItems, newItem],
        };
      }

      return {
        ...state,
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload, // Загрузка всех элементов корзины
        error: null,
      };
    case LOAD_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_FROM_CART_SUCCESS:
      const itemId = action.payload;
      // Удаляем товар из корзины и обновляем список уникальных товаров
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== itemId),
        uniqueItems: state.uniqueItems.filter((item) => item.id !== itemId),
      };
    case INCREASE_QUANTITY_SUCCESS:
      const increasedItemId = action.payload;
      // Увеличиваем количество выбранного товара в корзине на 1
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === increasedItemId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case DECREASE_QUANTITY_SUCCESS:
      const decreasedItemId = action.payload;
      // Уменьшаем количество выбранного товара в корзине на 1
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === decreasedItemId && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default СartReducer;
