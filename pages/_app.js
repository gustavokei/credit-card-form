import { useState, useEffect } from "react";
import "../styles/globals.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Provider from "../components/Context";

const MyApp = ({ Component, pageProps }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#DE4B4B",
      },
    },
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Provider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  );
};

export default MyApp;
