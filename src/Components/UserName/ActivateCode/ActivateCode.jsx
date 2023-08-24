import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ActivateCode.module.css";
import { HiUserCircle } from "react-icons/hi";
import { Header } from "../../Header/Header";
import { activateCode } from "../../../Store/UserName/UserActions";
import { CircularProgress } from "@mui/material";

export default function ActivateCode() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const onSubmit = (userData) => {
    const data = {
      email: email, // Используем значение электронной почты из параметров маршрута
      activation_code: userData.activation_code,
    };
    dispatch(activateCode(data)).then(() => {
      reset();
      navigate("/");
    });
  };

  return (
    <div style={{ background: "#f3f3f3", height: "100vh" }}>
      <Header />

      <div className="container">
        <div className={styles.signUp}>
          <div className={styles.headForm}>
            <HiUserCircle size={40} color={"#222"} />
            <h1>Подтвердите код</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.block}>
              <div className={styles.box}>
                <label htmlFor="activation_code">Активация:</label>
                <input
                  {...register("activation_code", {
                    required: "Поле обязательно к заполнению ",
                  })}
                  type="text"
                  placeholder="Активация"
                  id="activation_code"
                />
                {errors.activation_code && (
                  <p
                    style={{
                      color: "red",
                      marginTop: 10,
                      fontWeight: 100,
                      width: 200,
                    }}
                  >
                    {errors.activation_code.message}
                  </p>
                )}
              </div>
              {loading ? (
                <div style={{ textAlign: "center" }}>
                  <CircularProgress />
                </div>
              ) : (
                <button type="submit" disabled={loading}>
                  Активировать
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
