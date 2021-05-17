import React from "react";
import s from "../../styles/CreditCardForm/CreditCardFormMobile.module.scss";
import CreditCardFront from "./CreditCard/CreditCardFront";

const CreditCardFormMobile = () => {
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

          <div className={`flex ${s.creditCard}`}>
            <CreditCardFront />
          </div>
        </div>
        <div className={s.bottomContent}></div>
      </div>
    </div>
  );
};

export default CreditCardFormMobile;
