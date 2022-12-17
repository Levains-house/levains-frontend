import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
      <GlobalStyle />  
    </ThemeProvider>
  </React.StrictMode>
);
