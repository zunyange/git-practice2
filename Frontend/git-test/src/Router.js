import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../src/pages/Main/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
