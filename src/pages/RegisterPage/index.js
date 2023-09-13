import React from "react";
import "./registerpage.scss";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import { BsFillBuildingsFill } from "react-icons/bs";
import { PiPasswordBold } from "react-icons/pi";
import logo from "../../assets/logo.png";
const RegisterPage = () => {
  return (
    <div className="registerpage-container">
      <div className="registerpage-inner-container">
        <div className="registerpage-upper-container">
          <h3>Kayıt Ol</h3>
          <p>
            İşletmeniz için mümkün olan en iyi kullanıcı deneyimini oluşturmaya
            başlayın.
          </p>
        </div>
        <div className="registerpage-form-container">
          <div className="registerpage-form-side">
            <div className="registerpage-outer-input">
              <span>Firma Adı</span>
              <div className="registerpage-input-container">
                <BsFillBuildingsFill
                  style={{ marginLeft: "0.4rem" }}
                  size={20}
                  color="gray"
                />
                <input></input>
              </div>
            </div>
            <div className="registerpage-row-input">
              <div className="registerpage-row-input-column">
                <span>Ad</span>
                <input></input>
              </div>
              <div
                style={{ marginLeft: "1.5rem" }}
                className="registerpage-row-input-column"
              >
                <span>Soyad</span>
                <input></input>
              </div>
            </div>
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
            <div className="registerpage-outer-input">
              <span>Şifre Tekrarı</span>
              <div className="registerpage-input-container">
                <PiPasswordBold
                  style={{ marginLeft: "0.4rem" }}
                  size={20}
                  color="gray"
                />
                <input type="password"></input>
              </div>
            </div>
          </div>
          <div className="registerpage-form-side">
            <div className="registerpage-outer-input">
              <span>Vergi Dairesi</span>
              <div className="registerpage-input-container">
                <input></input>
              </div>
            </div>
            <div className="registerpage-outer-input">
              <span>Vergi Numarası</span>
              <div className="registerpage-input-container">
                <input></input>
              </div>
            </div>
            <div className="registerpage-input-logo-container">
              <span>Firma Logosu</span>
              <img src={logo}></img>
              <button>
                <AiOutlineUpload size={20} color="white" />
                Yükle
              </button>
            </div>
          </div>
        </div>
        <div className="registerpage-bottom-container">
          Hesabınız var mı? <a href="/login">Giris Yap</a>
        </div>
        <div className="registerpage-alert-container">
          {" "}
          <AiOutlineCheck size={20} color="#155724" />
          <span>
            Kaydınız tarafımza ulaşmıştır. Sizinle en yakın zamanda iletişime
            geçilecektir.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
