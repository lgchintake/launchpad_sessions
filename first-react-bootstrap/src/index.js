import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./assets/app.css";

import { DashboardComponent } from "./components/DashboardComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ComputerComponent } from "./components/ComputersComponent";
import { LoginComponent } from "./components/LoginComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" Component={LoginComponent} />
      <Route path="/dashboard" Component={DashboardComponent} />
      <Route path="/computers" Component={ComputerComponent} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
