import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocalAddress from "./pages/local/localAddress/LocalAddress";
import LocalItems from "./pages/local/localItems/LocalItems";
import Main from "./pages/main/Main";
import Select from "./pages/select/Select";
import Start from "./pages/start/Start";
import TravelAddress from "./pages/travel/travelAddress/TravelAddress";
import TravelItems from "./pages/travel/travelItems/TravelItems";
import Home from "./pages/main/Main";
import { RecoilRoot } from "recoil";
import Items from "./pages/items/Items";

const AppRouter = () => {
  return (
    <div className="Approuter">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element=<Start /> />
            <Route path="/select" element={<Select />}></Route>
            <Route path="/local_address" element={<LocalAddress />}></Route>
            <Route path="/travel_address" element={<TravelAddress />}></Route>
            <Route path="/local_items" element={<LocalItems />}></Route>
            <Route path="/items" element={<Items />}></Route>

            <Route path="/travel_items" element={<TravelItems />}></Route>
            <Route path="/main" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
};

export default AppRouter;
