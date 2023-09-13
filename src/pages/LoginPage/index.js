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
          <div className="registerpage-outer-input">
            <span>Email</span>
            <div className="registerpage-input-container">
              <AiOutlineMail
                style={{ marginLeft: "0.4rem" }}
                size={20}
                color="gray"
              />
              <input></input>
            </div>
          </div>
          <div className="registerpage-outer-input">
            <span>Şifre</span>
            <div className="registerpage-input-container">
              <PiPasswordBold
                style={{ marginLeft: "0.4rem" }}
                size={20}
                color="gray"
              />
              <input type="password"></input>
            </div>
          </div>
          <p className="loginpage-forget-pass">Şifremi unuttum ?</p>
          <a href="/dashboard">
            {" "}
            <button className="loginpage-login-button">
              <span>Giriş Yap</span>
            </button>{" "}
          </a>
        </div>
      </div>
      <div className="loginpage-bottom-container">
        <a href="/register">
          <span>Hesabınız yok mu?</span>
        </a>

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
