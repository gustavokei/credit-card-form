import React, { useContext } from "react";
import { Context } from "../components/Context";
import CreditCardFormDesktop from "../components/CreditCardForm/CreditCardFormDesktop";
import CreditCardFormMobile from "../components/CreditCardForm/CreditCardFormMobile";

export default function Home() {
  const { isDesktopOrLaptop, isTabletOrMobileDevice } = useContext(Context);
  return (
    <div className="container">
      {isDesktopOrLaptop && <CreditCardFormDesktop />}
      {isTabletOrMobileDevice && <CreditCardFormMobile />}
    </div>
  );
}
