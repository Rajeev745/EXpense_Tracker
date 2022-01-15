import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddExpense from "./pages/AddExpense/AddExpense";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-expense" element={<AddExpense/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;