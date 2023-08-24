// import {
//   REGISTER_REQUEST,
//   REGISTER_SUCCESS,
//   REGISTER_FAILURE,
//   ACTIVATE_REQUEST,
//   ACTIVATE_SUCCESS,
//   ACTIVATE_FAILURE,
//   ы,
// } from "./UserTypes";
// import { toast } from "react-toastify";

// export const registerUser = (userData) => {
//   return (dispatch) => {
//     dispatch({ type: REGISTER_REQUEST });
//     console.log(userData);

//     return fetch("http://127.0.0.1:8000/account/register/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           return response.text().then((errorMessage) => {
//             console.log(errorMessage); // Вывод ошибки в виде текста на консоль
//             if (response.status === 400) {
//               throw new Error(errorMessage);
//             } else if (response.status === 500) {
//               throw new Error("Ошибка с сервером");
//             } else {
//               throw new Error("Неизвестная ошибка");
//             }
//           });
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         dispatch({ type: REGISTER_SUCCESS });
//         return data; // Возвращаем данные для использования в следующем then
//       })
//       .catch((error) => {
//         console.log(error.message);
//         dispatch({ type: REGISTER_FAILURE, payload: error.message });
//         toast.error(error.message); // Отображение ошибки в виде toast
//         throw error; // Пробрасываем ошибку для обработки в вызывающем коде
//       });
//   };
// };

// export const activateCode = (data) => {
//   console.log(data)
//   return (dispatch) => {
//     dispatch({ type: ACTIVATE_REQUEST });

//     return fetch(
//       `http://127.0.0.1:8000/account/activate/?email=${data.email}&activation_code=${data.activation_code}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((response) => {
//         if (response.ok) {
//           console.log("Активация прошла успешно");
//           dispatch({ type: ACTIVATE_SUCCESS });
//           // Добавьте необходимую логику или обновление состояния для обработки успешной активации
//         } else {
//           throw new Error("Не удалось выполнить активацию");
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         dispatch({ type: ACTIVATE_FAILURE, payload: error.message });
//         // Обработка ошибок активации
//       });
//   };
// };
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

import { toast } from "react-toastify";

// UserActions.js

export const saveTokenToLocalstorage = (token) => ({
  type: SAVE_TOKEN_TO_LOCAL_STORAGE,
  payload: token,
});

export const loadTokenFromLocalstorage = () => ({
  type: LOAD_TOKEN_FROM_LOCAL_STORAGE,
});

export const registerUser = (userData) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    console.log(userData);

    return fetch("http://127.0.0.1:8000/account/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          throw new Error(
            "Некорректные данные либо аккаунт уже зарегистрирован"
          );
        } else if (response.status === 500) {
          throw new Error("Ошибка с сервером");
        } else {
          throw new Error("Неизвестная ошибка");
        }
      })
      .then((data) => {
        toast.success("Код с подтверждением отправлено на вашу эл.почту");
        dispatch({ type: REGISTER_SUCCESS });
        return data;
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch({ type: REGISTER_FAILURE, payload: error.message });
        throw error;
      });
  };
};

export const activateCode = (userData) => {
  return (dispatch) => {
    dispatch({ type: ACTIVATE_REQUEST });

    return fetch("http://127.0.0.1:8000/account/activate/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log(response.status);
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          throw new Error("Некорректные данные");
        } else if (response.status === 500) {
          throw new Error("Ошибка с сервером");
        } else {
          throw new Error("Неизвестная ошибка");
        }
      })
      .then((data) => {
        console.log(data);
        toast.success("Вы успешно зарегистрировались");
        dispatch({ type: ACTIVATE_SUCCESS });
        return data;
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch({ type: ACTIVATE_FAILURE, payload: error.message });
        throw error;
      });
  };
};

export const loginSuccess = (token) => {
  // Сохраните токен в localStorage
  localStorage.setItem("token", token);

  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
    },
  };
};

export const loginUser = (userData) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    return fetch("http://127.0.0.1:8000/account/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          throw new Error("Некорректные данные");
        } else if (response.status === 500) {
          throw new Error("Ошибка с сервером");
        } else {
          throw new Error("Неизвестная ошибка");
        }
      })
      .then((data) => {
        // Успешный вход
        const token = data.token; // Получаем токен из ответа сервера
        dispatch(loginSuccess(token)); // Передаем токен в действие loginSuccess
        return data;
      })
      .catch((error) => {
        // Ошибка входа
        toast.error(error.message);
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        throw error;
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });

    // Загрузка токена из localStorage
    const token = localStorage.getItem("token");

    return fetch("http://127.0.0.1:8000/account/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Включение токена в заголовок запроса
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Успешный выход
          toast.success("Вы вышли");

          dispatch({ type: LOGOUT_SUCCESS });
          localStorage.removeItem("token");
        } else {
          throw new Error("Не удалось выполнить выход");
        }
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch({ type: LOGOUT_FAILURE, payload: error.message });
        throw error;
      });
  };
};
