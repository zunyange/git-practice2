import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../src/pages/Main/Main";
import Login from "../src/pages/Login/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
