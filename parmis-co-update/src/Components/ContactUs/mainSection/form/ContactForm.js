import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_FORM } from "../../../../graphql/mutation";

// Components
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Style
import "./ContactForm.module.css";
import style from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendForm, { data }] = useMutation(SEND_FORM, {
    variables: { name, lastName, phoneNumber, city, text },
  });
  const sendHandler = () => {
    if (name && lastName && phoneNumber && city && text) {
      sendForm();
      setPressed(true);
      setName("");
      setLastName("");
      setPhoneNumber("");
      setCity("");
      setText("");
    } else {
      toast.warn("لطفا مشخصات را کامل کنید", {
        position: "top-center",
      });
    }
  };
  console.log(data);
  if (data && pressed) {
    toast.success("اطلاعات ارسال شد", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setPressed(false);
  }

  return (
    <div className={style.container}>
      <h2 className={style.header}>فرم تماس</h2>
      <form className={style.form}>
        <div className={style.row}>
          <input
            placeholder="نام"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="نام خانوادگی"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={style.row}>
          <input
            placeholder="شماره همراه"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            placeholder="شهر"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={style.row}>
          <textarea
            placeholder="پیام شما"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className={style.btn} onClick={sendHandler}>
          ارسال
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
}

export default ContactForm;
