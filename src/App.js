import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { selectUserName } from "./features/user/userSlice";
import { useSelector } from "react-redux";

function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
