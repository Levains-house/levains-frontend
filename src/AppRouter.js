import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocalAddress from "./pages/LocalAddress";
import LocalItems from "./pages/LocalItems";
import Main from "./pages/Main";
import Select from "./pages/Select";
import Start from "./pages/Start";
import TravelAddress from "./pages/TravelAddress";
import TravelItems from "./pages/TravelItems";

const AppRouter = () => {
  return (
    <div className="Approuter">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Start />}></Route>
          <Route path='/select' element = {<Select />}></Route>
          <Route path='/local_address' element = {<LocalAddress />}></Route>
          <Route path='/travel_address' element = {<TravelAddress />}></Route>
          <Route path='/local_items' element = {<LocalItems />}></Route>
          <Route path='/travel_items' element = {<TravelItems />}></Route>
          <Route path='/main' element = {<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;