import React from "react";
import { useForm } from "react-hook-form";

import styles from "./SignIn.module.css";
import { HiUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../Store/UserName/UserActions";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const error = useSelector((state) => state.auth.error);
  // hookForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  // submit
  const onSubmit = (userData) => {
    console.log(userData);
    dispatch(loginUser(userData)).then(() => {
      navigate("/");
      reset();
    });
  };

  return (
    <div style={{ background: "#f3f3f3", height: "100vh" }}>
      <Header />
      <div className="container">
        <div className={styles.signIn}>
          <div className={styles.headForm}>
            <HiUserCircle size={40} color={"#222"} />
            <h1>Вход</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.box}>
              <label htmlFor="email">Email:</label>
              <input
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Некорректный Email",
                  },
                })}
                placeholder="Email"
                type="text"
                id="email"
                name="email"
                autoComplete="off"
              />
              {errors.email && (
                <p style={{ color: "red", marginTop: 10, fontWeight: 100 }}>
                  {errors.email.message}
                  {/* {error.message} */}
                </p>
              )}
            </div>
            <div className={styles.box}>
              <label htmlFor="password">Пароль:</label>
              <input
                {...register("password", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 8,
                    message: "Пароль должен содержать минимум 8 символов",
                  },
                })}
                type="password"
                name="password"
                placeholder="Пароль"
                id="password"
                autoComplete="off"
              />
              {errors.password && (
                <p style={{ color: "red", marginTop: 10, fontWeight: 100 }}>
                  {errors.password.message}
                  {/* {error.message} */}
                </p>
              )}
            </div>
            <div className={styles.checked}>
              <input
                {...register("rememberMe")}
                style={{ width: "auto" }}
                type="checkbox"
                id="rememberMe"
                // checked={isRememberMeChecked}
                // onChange={handleRememberMeChange}
              />

              <label htmlFor="rememberMe">Запомнить меня:</label>
            </div>

            <button type="submit">Войти</button>
          </form>
          <div className={styles.signInBottom}>
            <div>
              <Link to="/forgotPassword">Забыли пароль?</Link>
            </div>
            <div>
              <Link to="/signUp">У вас нет аккаунта? Зарегистрируйтесь</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
