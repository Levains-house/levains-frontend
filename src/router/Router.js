import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RouteChangeTracker from "./RouteChangeTracker";

const Router = () => {
  return (
    <BrowserRouter>
      <RouteChangeTracker>
        <Routes></Routes>
      </RouteChangeTracker>
    </BrowserRouter>
  );
};

export default Router;
