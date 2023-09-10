import React from "react";
import "./costumeredit.scss";
import MainLayout from "../../layouts";
import { FaSave } from "react-icons/fa";
import SubeTable from "./SubeTable";

const CostumerEditPage = () => {
  return (
    <MainLayout>
      <div className="costumer-edit-container">
        <div className="costumer-edit-upper-container">
          <h3>Müşteri Düzenle</h3>
        </div>
        <div className="costumer-edit-form-container">
          <div className="costumer-edit-form-inner-container">
            {" "}
            <div className="costumer-edit-form-upper-container">
              <h5>15 TEMMUZ ŞEHİTLER FEN LİSESİ</h5>
              <button style={{ cursor: "pointer" }}>
                <FaSave size={15} color="white" />
                <span>Kaydet</span>
              </button>
            </div>
            <div className="costumer-edit-first-form">
              <div className="costumer-edit-first-form-left">
                <span>Ana Bilgiler</span>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>İsim</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <input value="Kadir İleli" />
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>Email</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <input value="test@email.com" />
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>Telefon</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <input value="0532 234 2334" />
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>Durum</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <select value="Aktif">
                      <option>Aktif</option>
                    </select>
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left-textarea">
                    <span>Adres</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <textarea value="İstiklal Mah. 339. Sokak No:16 / 3" />
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>İl</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <select value="Aktif">
                      <option>SAKARYA</option>
                    </select>
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>İlçe</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <select value="Aktif">
                      <option>SERDİVAN</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="costumer-edit-first-form-left">
                <span>Diğer Bilgiler</span>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>Vergi Dairesi</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <input value="ALİ FUAT CEBESOY" />
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>Vergi No</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <input value="0070581892" />
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>Üye Şifresi</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <input value="AERKq31sds3" />
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>Bakim Periyodu</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <select value="6 Ay">
                      <option>1 Ay</option>
                      <option>3 Ay</option>
                      <option>4 Ay</option>
                      <option>6 Ay</option>
                      <option>12 Ay</option>
                    </select>
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>Dolum Periyodu</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <select value="4 Yıl">
                      <option>4 Yıl</option>
                    </select>
                  </div>
                </div>
                <div className="costumer-edit-form-input-row">
                  <div className="costumer-edit-form-input-row-left">
                    <span>Test Periyodu</span>
                  </div>
                  <div className="costumer-edit-form-input-row-right">
                    <select value="10 Yıl">
                      <option>10 Yıl</option> <option>4 Yıl</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="costumer-edit-second-form">
              <div className="costumer-edit-second-form-left">
                <SubeTable />
              </div>
              <div className="costumer-edit-second-form-right">
                <div className="costumer-edit-second-form-right-inner">
                  {" "}
                  <div className="costumer-edit-form-input-row">
                    <div className="costumer-edit-form-input-row-left">
                      <span>Şube İsmi</span>
                    </div>
                    <div className="costumer-edit-form-input-row-right">
                      <input value="Serdivan Şubesi" />
                    </div>
                  </div>
                  <div className="costumer-edit-form-input-row">
                    <div className="costumer-edit-form-input-row-left">
                      <span>Yetkili Kişi</span>
                    </div>
                    <div className="costumer-edit-form-input-row-right">
                      <input value="Çağlar Gül" />
                    </div>
                  </div>
                  <div className="costumer-edit-form-input-row">
                    <div className="costumer-edit-form-input-row-left">
                      <span>Yetkili Email</span>
                    </div>
                    <div className="costumer-edit-form-input-row-right">
                      <input value="test@email.com" />
                    </div>
                  </div>
                  <div className="costumer-edit-form-input-row">
                    <div className="costumer-edit-form-input-row-left-textarea">
                      <span>Adres</span>
                    </div>
                    <div className="costumer-edit-form-input-row-right">
                      <textarea value="test@email.com" />
                    </div>
                  </div>
                  <div className="costumer-edit-form-input-row">
                    <div className="costumer-edit-form-input-row-left">
                      <span>İl</span>
                    </div>
                    <div className="costumer-edit-form-input-row-right">
                      <select>
                        <option>SAKARYA</option>
                      </select>
                    </div>
                  </div>
                  <div className="costumer-edit-form-input-row">
                    <div className="costumer-edit-form-input-row-left">
                      <span>İlçe</span>
                    </div>
                    <div className="costumer-edit-form-input-row-right">
                      <select>
                        <option>SERDİVAN</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="costumer-edit-page-bottom">
          <span>Müşteriyi Sil</span>
          <span
            style={{ color: "gray", fontSize: "0.65rem", marginTop: "0.3rem" }}
          >
            Müşteriyi silerseniz tüm bağlı olduğu veriler geri döndürülemez
            şekilde silinecektir.
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default CostumerEditPage;
