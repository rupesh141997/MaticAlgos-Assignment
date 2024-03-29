import React from "react";
import "./table.css";
const data = {
  status: true,
  error: false,
  data: [
    {
      Start_Date: "2024-02-28",
      End_Date: "2024-03-14",
      Drawdown_days: 15,
      Trading_days: 9,
      Total_Trades: 55,
      Max_Drawdown: -18567.54,
      Max_Drawdown_Date: "2024-02-28",
      Time_for_max_drawdown: 0,
      Time_for_recovery: 15,
    },
    {
      Start_Date: "2024-01-31",
      End_Date: "2024-02-08",
      Drawdown_days: 8,
      Trading_days: 6,
      Total_Trades: 48,
      Max_Drawdown: -6645.950000000001,
      Max_Drawdown_Date: "2024-01-31",
      Time_for_max_drawdown: 0,
      Time_for_recovery: 8,
    },
    {
      Start_Date: "2024-02-21",
      End_Date: "2024-02-28",
      Drawdown_days: 7,
      Trading_days: 5,
      Total_Trades: 22,
      Max_Drawdown: -4353.5,
      Max_Drawdown_Date: "2024-02-21",
      Time_for_max_drawdown: 0,
      Time_for_recovery: 7,
    },
    {
      Start_Date: "2024-01-11",
      End_Date: "2024-01-17",
      Drawdown_days: 6,
      Trading_days: 3,
      Total_Trades: 15,
      Max_Drawdown: -3704.8999999999996,
      Max_Drawdown_Date: "2024-01-11",
      Time_for_max_drawdown: 0,
      Time_for_recovery: 6,
    },
    {
      Start_Date: "2024-01-08",
      End_Date: "2024-01-11",
      Drawdown_days: 3,
      Trading_days: 2,
      Total_Trades: 13,
      Max_Drawdown: -257.0,
      Max_Drawdown_Date: "2024-01-08",
      Time_for_max_drawdown: 0,
      Time_for_recovery: 3,
    },
    {
      Start_Date: "2024-02-14",
      End_Date: "2024-02-16",
      Drawdown_days: 2,
      Trading_days: 2,
      Total_Trades: 7,
      Max_Drawdown: -0.05000000000291038,
      Max_Drawdown_Date: "2024-02-14",
      Time_for_max_drawdown: 0,
      Time_for_recovery: 2,
    },
  ],
  message: "Data received",
};

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Max DD</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                {row.Start_Date} - {row.End_Date}
              </td>
              <td className={row.Max_Drawdown > 0 ? "green" : "red"}>
                {(Math.round(row.Max_Drawdown * 100) / 100).toFixed(2)}
              </td>
              <td>{row.Drawdown_days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
