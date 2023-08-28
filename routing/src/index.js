import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomeComponent from "./components/HomeComponent";
import ContactUsComponent from "./components/ContactUsComponent";
import DepartmentComponent from "./components/DepartmentComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import NotFoundComponent from "./components/NotFoundComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={HomeComponent} />
        <Route path="/home" Component={HomeComponent} />
        <Route path="/department" Component={DepartmentComponent} />
        <Route path="/contact-us" Component={ContactUsComponent} />
        <Route path="/about-us" Component={AboutUsComponent} />
        {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
        <Route path="*" Component={NotFoundComponent} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
