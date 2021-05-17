import React, { useContext } from "react";
import s from "../../../styles/CreditCardForm/CreditCard/CreditCard.module.scss";
import { Context } from "../../Context";

const CreditCardBack = () => {
  const { paymentInfo, cardType } = useContext(Context);

  return (
    <div className={`img-credit-card-back ${s.container} `}>
      <img
        className={s.creditCard}
        src={`CreditCardForm/img-credit-card${
          cardType == "visa" ? "-visa" : ""
        }-back.svg`}
      ></img>
      <span className={`sf-regular ${s.cardText} ${s.cvv}`}>
        {paymentInfo.cvv.replace(/[0-9]/g, "*")}
      </span>
    </div>
  );
};

export default CreditCardBack;
