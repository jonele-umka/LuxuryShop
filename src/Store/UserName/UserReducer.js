// import {
//   REGISTER_REQUEST,
//   REGISTER_SUCCESS,
//   REGISTER_FAILURE,
//   ACTIVATE_REQUEST,
//   ACTIVATE_SUCCESS,
//   ACTIVATE_FAILURE,
// } from "./UserTypes";

// const initialState = {
//   loading: false,
//   error: null,
//   isRegistered: false,
//   isActivated: false, // Новое поле для отслеживания активации кода
// };

// const UserReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case REGISTER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case REGISTER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isRegistered: true,
//       };
//     case REGISTER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case ACTIVATE_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case ACTIVATE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isActivated: true,
//       };
//     case ACTIVATE_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default UserReducer;
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  ACTIVATE_REQUEST,
  ACTIVATE_SUCCESS,
  ACTIVATE_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SAVE_TOKEN_TO_LOCAL_STORAGE,
  LOAD_TOKEN_FROM_LOCAL_STORAGE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "./UserTypes";

const initialState = {
  loading: false,
  error: null,
  isRegistered: false,
  isActivated: false,
  isLoggedIn: false,
  token: localStorage.getItem("token") || null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN_TO_LOCAL_STORAGE: // Обработчик для сохранения токена в localStorage
      const { token } = action.payload;
      localStorage.setItem("token", token);
      return {
        ...state,
        token,
      };

    case LOAD_TOKEN_FROM_LOCAL_STORAGE: // Обработчик для загрузки токена из localStorage
      const loadedToken = localStorage.getItem("token");
      return {
        ...state,
        token: loadedToken,
      };
    case REGISTER_REQUEST:
    case ACTIVATE_REQUEST:
    case LOGIN_REQUEST: // Добавлено действие для запроса входа
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isRegistered: true,
      };
    case ACTIVATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isActivated: true,
      };
    case LOGIN_SUCCESS: // Добавлено действие для успешного входа
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        token: action.payload.token,
      };
    case REGISTER_FAILURE:
    case ACTIVATE_FAILURE:
    case LOGIN_FAILURE: // Добавлено действие для ошибки входа
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        token: null,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
