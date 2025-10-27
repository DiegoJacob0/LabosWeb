
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Protected from "./components/Protected";

const App = () => (
  <Router>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Protected" element={<Protected />} />
    </Routes>
  </Router>
);

export default App;
