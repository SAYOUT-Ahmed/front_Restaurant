import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Composants/Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./Composants/Layout";
import Dashboard from "./Composants/Dashboard";
import ZoneCrud from "./Composants/Zones";
import RestaurantCrud from "./Composants/Restaurants";
import VilleCrud from "./Composants/Villes";
import SpCrud from "./Composants/Specialites";
import Details from "./Composants/Details";

function App() {
  return (
    <Router>
      {/*<Routes>
        <Route path='/' exact={true} element={<Villes/>}/>
        <Route path='villes/:id' element={<AddVille/>}/>
  </Routes>*/}
      <Routes>
        <Route path="/" element={<AdminLayout />}>

          <Route path="" element={<Dashboard />} />
          <Route path="zones" element={<ZoneCrud/>} />
          <Route path="restaurants" element={<RestaurantCrud/>} />
          <Route path="villes" element={<VilleCrud/>} />
          <Route path="specialites" element={<SpCrud/>} />
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
