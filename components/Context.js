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

  const dataProvider = {
    isDesktopOrLaptop,
    isTabletOrMobileDevice,
    paymentInfo,
    setPaymentInfo,
  };

  return <Context.Provider value={dataProvider}>{children}</Context.Provider>;
};

export default Provider;
