import React, { useState } from "react";
import "./loginpage.scss";
import { AiOutlineMail } from "react-icons/ai";
import { PiPasswordBold } from "react-icons/pi";
const LoginPage = () => {
  return (
    <div className="loginpage-container">
      <div className="loginpage-upper-container">
        <h2>firexsy</h2>
        <span>Devam etmek için hesabınızla oturum açın</span>
      </div>
      <div className="loginpage-form-container">
        <div className="loginpage-inner-form-container">
          <div className="loginpage-input-outer-container">
            <span>Email</span>
            <div className="loginpage-input-container">
              <input className="loginpage-mail-input"></input>{" "}
              <AiOutlineMail
                size={25}
                color="gray"
                className="loginpage-mail-icon"
              />
            </div>
          </div>
          <div
            style={{ marginTop: "1rem" }}
            className="loginpage-input-outer-container"
          >
            <span>Şifre</span>
            <div className="loginpage-input-container">
              <input
                className="loginpage-password-input"
                type="password"
              ></input>
              <PiPasswordBold
                size={25}
                color="gray"
                className="loginpage-password-icon"
              />
            </div>
          </div>
          <p className="loginpage-forget-pass">Şifremi unuttum ?</p>
          <button className="loginpage-login-button">
            <span>Giriş Yap</span>
          </button>
        </div>
      </div>
      <div className="loginpage-bottom-container">
        <span>Hesabınız yok mu?</span>
        <span
          style={{
            cursor: "pointer",
            color: "#0066F4",
            fontWeight: "700",
            marginLeft: "0.5rem",
          }}
        >
          Kayıt Ol
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
