import React from "react";
import s from "../../styles/CreditCardForm/CreditCardFormDesktop.module.scss";
import CreditCardFront from "./CreditCard/CreditCardFront";
import Form from "./Form/Form";

const CreditCardFormDesktop = () => {
  return (
    <div className={s.desktopWrapper}>
      <div className={`flex ${s.container}`}>
        <div className={`flex flex-column ${s.leftContent}`}>
          <div className={`flex ${s.changePaymentMethod}`}>
            <img
              className="icon-chevron icon-chevron-left"
              src={"CreditCardForm/icon-chevron-right-white.svg"}
            ></img>
            <span className="text-white verdana">
              Alterar forma de pagamento
            </span>
          </div>
          <div className={`flex ${s.addCreditCardTitle}`}>
            <img
              className={`icon-add-credit-card`}
              src={"CreditCardForm/icon-add-credit-card.svg"}
            ></img>
            <h3 className="text-white verdana">
              Adicione um novo cartão de crédito
            </h3>
          </div>
          <CreditCardFront />
        </div>

        <div className={s.rightContent}>
          <div className={`flex ${s.rightContentHeader}`}>
            <div className={`flex ${s.step} ${s.active}`}>
              <div className={`flex ${s.stepIcon}`}>
                <img
                  className="icon-current-step"
                  src={"CreditCardForm/icon-current-step.svg"}
                ></img>
              </div>
              <span className={`verdana ${s.stepText}`}>Carrinho</span>
            </div>
            <div className={`flex ${s.step}`}>
              <div className={`flex ${s.stepIcon}`}>
                <strong className="verdana">2</strong>
              </div>
              <span className={`verdana ${s.stepText}`}>Pagamento</span>
            </div>
            <div className={`flex ${s.step}`}>
              <div className={`flex ${s.stepIcon}`}>
                <strong className="verdana">3</strong>
              </div>
              <span className={`verdana ${s.stepText}`}>Confirmação</span>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CreditCardFormDesktop;
