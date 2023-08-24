import PhoneInput from "react-phone-number-input";
import React from "react";
import styles from "./PhoneNumber.module.css";
import { Controller } from "react-hook-form";

const PhoneNumber = ( ) => {
  return (
    <div>
      <label htmlFor="credit_insurant_phone">Номер телефона</label>
      <Controller
        name="credit_insurant_phone"
        // control={control}
        render={({ field }) => {
          return (
            <PhoneInput
              {...field}
              international
              defaultCountry="KG"
              type="tel"
              id={styles.credit_insurant_phone}
              // placeholder="Введите свой номер телефона"
            />
          );
        }}
      />

      {/* <div>
        {errors?.credit_insurant_phone && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {errors?.credit_insurant_phone?.message || "Ошибка"}
          </p>
        )}
      </div> */}
    </div>
  );
};
export default PhoneNumber;
