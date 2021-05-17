import React from "react";
import s from "../../../styles/CreditCardForm/CreditCard/CreditCard.module.scss";

const CreditCardFront = () => {
  return (
    <div className={`img-credit-card-front ${s.container}`}>
      <img
        className={s.creditCard}
        src={"CreditCardForm/img-credit-card-visa-front.svg"}
      ></img>
    </div>
  );
};

export default CreditCardFront;
