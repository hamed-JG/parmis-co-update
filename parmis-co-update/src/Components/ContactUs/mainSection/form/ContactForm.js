import React from "react";

// Style
import "./ContactForm.module.css";
import style from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={style.container}>
      <h2 className={style.header}>فرم تماس</h2>
      <form className={style.form}>
        <div className={style.row}>
          <input placeholder="نام" />
          <input placeholder="نام خانوادگی" />
        </div>
        <div className={style.row}>
          <input placeholder="شماره همراه" />
          <input placeholder="شهر" />
        </div>
        <div className={style.row}>
          <textarea placeholder="پیام شما"></textarea>
        </div>
        <div className={style.btn}>ارسال</div>
      </form>
    </div>
  );
}

export default ContactForm;
