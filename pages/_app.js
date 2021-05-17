import { useState, useEffect } from "react";
import "../styles/globals.scss";
import Provider from "../components/Context";

const MyApp = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    )
  );
};

export default MyApp;
