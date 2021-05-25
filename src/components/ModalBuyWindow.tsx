import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ModalSuccess from "./ModalSuccess";

interface ModalBuyWindowProps {
  handleOnClick: () => void;
}

export default function ModalBuyWindow({ handleOnClick }: ModalBuyWindowProps) {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FormData) => {
    setSuccess(true);
  };
  console.log(errors);

  interface FormData {
    passportNumber: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  }

  const closeModalSuccess = () => {
    setSuccess((prevState) => !prevState);
    handleOnClick();
  };

  return (
    <form
      className="user-info-form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      {success && <ModalSuccess handleOnClick={closeModalSuccess} />}
      <button onClick={handleOnClick} type="button">
        x
      </button>
      <input
        className={`${errors.email ? errors.email.type : ""}`}
        type="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          minLength: 6,
          maxLength: 30,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
        })}
      />
      <input
        className={`${errors.phone ? errors.phone.type : ""}`}
        type="text"
        placeholder="Phone"
        {...register("phone", {
          required: true,
          pattern: /^((\+?7|7|8)+([0-9]){10})$/i,
        })}
      />
      <input
        className={`${errors.firstName ? errors.firstName.type : ""}`}
        type="text"
        placeholder="First Name"
        {...register("firstName", {
          required: true,
          minLength: 2,
          maxLength: 26,
          pattern: /^(?:[\u00c0-\u01ffa-zA-Zа-яА-Я'-]){2,}$/i,
        })}
      />
      <input
        className={`${errors.lastName ? errors.lastName.type : ""}`}
        type="text"
        placeholder="Last name"
        {...register("lastName", {
          required: true,
          minLength: 2,
          maxLength: 26,
          pattern: /^(?:[\u00c0-\u01ffa-zA-Zа-яА-Я'-]){2,}$/i,
        })}
      />
      <input
        type="number"
        placeholder="Passport number"
        {...register("passportNumber", {
          required: true,
          maxLength: 7,
          minLength: 7,
        })}
      />
      <input className="btn btn-submit" type="submit" />
    </form>
  );
}
