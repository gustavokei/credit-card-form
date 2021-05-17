import React from "react";
import s from "../../../styles/CreditCardForm/CreditCard/CreditCard.module.scss";

const CreditCard = () => {
  return (
    <>
      <div className={`img-credit-card-front ${s.creditCard}`}>
        <img
          className={`icon-visa ${s.iconVisa}`}
          src={"CreditCardForm/icon-visa.svg"}
        ></img>
      </div>
    </>
  );
};

export default CreditCard;
