import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import AppRouter from "./AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();
// reportWebVitals();