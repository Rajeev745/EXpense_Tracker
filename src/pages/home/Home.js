import React from "react";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TopFold from "../../components/TopFold/TopFold";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;