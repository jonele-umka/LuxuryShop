import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SignUp.module.css";
import { HiUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../Header/Header";
import { registerUser } from "../../../Store/UserName/UserActions";
import { CircularProgress } from "@mui/material";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const navigate = useNavigate(); // Хук useNavigate для переходов

  const onSubmit = (userData) => {
    console.log(userData);
    dispatch(registerUser(userData)).then(() => {
      navigate("/activateCode", { state: { email: userData.email } });
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
            <h1>Регистрация</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.block}>
              <div className={styles.box}>
                <label htmlFor="first_name">ИМЯ:</label>
                <input
                  {...register("first_name", {
                    required: "Поле обязательно к заполнению",
                  })}
                  placeholder="ИМЯ"
                  type="text"
                  id="first_name"
                />

                {errors.first_name && (
                  <p style={{ color: "red", marginTop: 10, fontWeight: 100 }}>
                    Ошибка
                  </p>
                )}
              </div>
              <div className={styles.box}>
                <label htmlFor="last_name">ФАМИЛИЯ:</label>
                <input
                  {...register("last_name", {
                    required: "Поле обязательно к заполнению",
                  })}
                  placeholder="ФАМИЛИЯ"
                  type="text"
                  id="last_name"
                />
                {errors.last_name && (
                  <p style={{ color: "red", marginTop: 10, fontWeight: 100 }}>
                    Ошибка
                  </p>
                )}
              </div>

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
                />
                {errors.email && (
                  <p style={{ color: "red", marginTop: 10, fontWeight: 100 }}>
                    {errors.email.message}
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
                  placeholder="Пароль"
                  id="password"
                />
                {errors.password && (
                  <p
                    style={{
                      color: "red",
                      marginTop: 10,
                      fontWeight: 100,
                      width: 200,
                    }}
                  >
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className={styles.box}>
                <label htmlFor="password_confirmation">
                  Подтверждение пароля:
                </label>
                <input
                  {...register("password_confirmation", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                      value: 8,
                      message: "Пароль должен содержать минимум 8 символов",
                    },
                  })}
                  type="password"
                  placeholder="Подтверждение пароля"
                  id="password_confirmation"
                />
                {errors.password_confirmation && (
                  <p
                    style={{
                      color: "red",
                      marginTop: 10,
                      fontWeight: 100,
                      width: 200,
                    }}
                  >
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>
            </div>
            {loading ? (
              <div style={{ textAlign: "center" }}>
                <CircularProgress />
              </div>
            ) : (
              <button type="submit" disabled={loading}>
                Зарегистрироваться
              </button>
            )}
          </form>
          <div className={styles.signInBottom}>
            <Link to="/signIn">У вас есть аккаунт? Войдите</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
