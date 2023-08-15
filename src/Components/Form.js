import React from "react";
import { Formik } from "formik";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
function Form() {
  return (
    <div className="form-style">
      <h1>Bize Ulaşın</h1>

      <div className="footer-container">
        <div className="footer">
          <div className="footer-content">
            <div className="footer-address">
              <h4>Adres</h4>
              <p>
                DEĞİRMENALTI MAHALLESİ DENİZ YILDIZI SOKAK ÇAMLIKPARK SİTESİ C
                BLOK
              </p>
              <p>SÜLEYMANPAŞA/TEKİRDAĞ</p>
            </div>
            <div className="footer-phone">
              <h4>Telefon</h4>
              <p>+90 0549 120 00 59</p>
            </div>
            <div className="socialconnect">
              <Link
                to={"https://www.instagram.com/tabbydigital/"}
                target="_blank"
              >
                <BsInstagram color="white" />
              </Link>
              <Link
                to={"https://www.linkedin.com/company/tabby-creative-house/"}
                target="_blank"
              >
                <BsLinkedin color="white" />
              </Link>
              <Link
                to={"https://www.facebook.com/tabbycreativehouse"}
                target="_blank"
              >
                <BsFacebook color="white" />
              </Link>
            </div>
          </div>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-card">
                <label htmlFor="firstName">Adınız</label>
                <input type="text" name="firstName" onChange={handleChange} />

                <label htmlFor="lastName">Soyadınız</label>
                <input type="text" name="lastName" onChange={handleChange} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />

                <label htmlFor="text">Mesajınız</label>
                <textarea
                  className="txtwdth"
                  name="message"
                  rows="4"
                  placeholder="Mesajınızı buraya yazınız"
                  onChange={handleChange}
                />

                <button type="submit">Gönder</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Form;
