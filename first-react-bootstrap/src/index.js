import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/app.scss";

import { DashboardComponent } from "./components/DashboardComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ComputerComponent } from "./components/ComputersComponent";
import { LoginComponent } from "./components/LoginComponent";
import { ThemeProvider } from "./helpers/ThemeContext";
import { LoginContextProvider } from "./helpers/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
      <BrowserRouter basename="/">
    <LoginContextProvider>
        <Routes>
          <Route path="/" Component={LoginComponent} />
          <Route path="/dashboard" Component={DashboardComponent} />
          <Route path="/computers" Component={ComputerComponent} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </LoginContextProvider>
      </BrowserRouter>
  </ThemeProvider>
);
