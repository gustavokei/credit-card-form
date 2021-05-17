import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNo: "",
    name: "",
    expiryDate: "",
    cvv: "",
    installments: "",
  });

  const [showCreditCardFront, setShowCreditCardFront] = useState(true);
  const [flipCreditCard, setFlipCreditCard] = useState(false);

  const dataProvider = {
    isDesktopOrLaptop,
    isTabletOrMobileDevice,
    paymentInfo,
    setPaymentInfo,
    showCreditCardFront,
    setShowCreditCardFront,
    flipCreditCard,
    setFlipCreditCard,
  };

  return <Context.Provider value={dataProvider}>{children}</Context.Provider>;
};

export default Provider;
