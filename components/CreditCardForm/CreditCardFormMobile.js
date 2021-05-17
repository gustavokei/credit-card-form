import React, { useContext } from "react";
import s from "../../styles/CreditCardForm/CreditCardFormMobile.module.scss";
import CreditCardFront from "./CreditCard/CreditCardFront";
import CreditCardBack from "./CreditCard/CreditCardBack";
import Form from "./Form/Form";
import { Context } from "../Context";

const CreditCardFormMobile = () => {
  const { showCreditCardFront, flipCreditCard } = useContext(Context);

  return (
    <div className={s.mobileWrapper}>
      <div className={`flex ${s.container}`}>
        <div className={s.topContent}>
          <span className={`text-white verdana ${s.checkoutStepTitle}`}>
            <strong>Etapa 2</strong> de 3
          </span>
          <img
            className={`icon-chevron icon-chevron-left ${s.iconChevron}`}
            src={"CreditCardForm/icon-chevron-right-white.svg"}
          ></img>
          <div className={`flex ${s.addCreditCardTitle}`}>
            <img
              className={`icon-add-credit-card`}
              src={"CreditCardForm/icon-add-credit-card.svg"}
            ></img>
            <h3 className="text-white verdana">
              Adicione um novo cartão de crédito
            </h3>
          </div>

          <div
            className={`flex ${s.creditCard} animate-credit-card ${
              flipCreditCard ? "flipCreditCard" : ""
            }`}
          >
            {showCreditCardFront ? <CreditCardFront /> : <CreditCardBack />}
          </div>
        </div>
        <div className={s.bottomContent}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CreditCardFormMobile;
