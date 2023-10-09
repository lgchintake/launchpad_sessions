import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import { DashboardComponent } from "./components/DashboardComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ComputerComponent } from "./components/ComputersComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" Component={DashboardComponent} />
      <Route path="/computers" Component={ComputerComponent} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
