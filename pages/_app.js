import "../styles/globals.scss";
import Provider from "../components/Context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
