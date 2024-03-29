import React from "react";
import Chart from "./Chart";
import Table from "./Table";
import "./Main.css";
import exclamation from "../assets/exclamation2.png";
 



const Main = () => {

  

  return (
    <div className="main">
      <div className="header">
        <h3>Drawdown Periods</h3>
        <img src={exclamation} alt="" />
      </div>

      <div className="table-chart">
        <Chart />
        <Table />
      </div>
    </div>
  );
};

export default Main;
