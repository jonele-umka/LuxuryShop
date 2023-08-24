import React from "react";
import { useForm } from "react-hook-form";

import styles from "./ForgotPassword.module.css";
import { HiUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../Header/Header";
import { useDispatch, useSelector } from "react-redux";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // hookForm
  const {
    register,

    formState: { errors },
  } = useForm();

  return (
    <div style={{ background: "#f3f3f3", height: "100vh" }}>
      <Header />
      <div className="container">
        <div className={styles.signIn}>
          <div className={styles.headForm}>
            <HiUserCircle size={40} color={"#222"} />
            <h1>Забыли пароль?</h1>
          </div>
          <form>
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

            <button type="submit">Отправить</button>
          </form>
          <div className={styles.signInBottom}>
            <Link to="/signUp">У вас нет аккаунта? Зарегистрируйтесь</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
