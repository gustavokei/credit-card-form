import React, { useContext } from "react";
import s from "../../../styles/CreditCardForm/CreditCard/CreditCard.module.scss";
import { Context } from "../../Context";

const CreditCardFront = () => {
  const { paymentInfo, cardType } = useContext(Context);

  return (
    <div className={`img-credit-card-front ${s.container}`}>
      <img
        className={s.creditCard}
        src={`CreditCardForm/img-credit-card${
          cardType == "visa" ? "-visa" : ""
        }-front.svg`}
      ></img>
      <span className={`sf-regular text-white ${s.cardText} ${s.cardNo}`}>
        {paymentInfo.cardNo}
      </span>
      <span className={`sf-regular text-white ${s.cardText} ${s.name}`}>
        {paymentInfo.name}
      </span>
      <span className={`sf-regular text-white ${s.cardText} ${s.expiryDate}`}>
        {paymentInfo.expiryDate}
      </span>
    </div>
  );
};

export default CreditCardFront;
