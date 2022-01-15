import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Top-fold.css";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";
const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
          <i class="fas fa-search"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <button className="add-button">
            <i class="fas fa-plus"></i>
              <label>Add</label>
            </button>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <button className="add-topfold-button">
            <i class="fas fa-chevron-left"></i>
              <label>Back</label>
            </button>
          </Link>
          <Link to="/">
            <button className="add-topfold-button">
            <i class="far fa-window-close"></i>
              <label>Cancel</label>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;