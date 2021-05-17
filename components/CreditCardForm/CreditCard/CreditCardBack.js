import React from "react";
import s from "../../../styles/CreditCardForm/CreditCard/CreditCard.module.scss";

const CreditCardBack = () => {
  return (
    <div className={`img-credit-card-back ${s.container} `}>
      <img
        className={s.creditCard}
        src={"CreditCardForm/img-credit-card-visa-back.svg"}
      ></img>
    </div>
  );
};

export default CreditCardBack;
