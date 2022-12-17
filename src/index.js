import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
    {/* {console.log(window.innerHeight)} */}
    <GlobalStyle height={window.innerHeight * 0.01} />  
  </React.StrictMode>
);
