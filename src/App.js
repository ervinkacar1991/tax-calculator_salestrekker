import React, { useState, useReducer } from "react";
import Home from "./pages/HomePage/Home";
import "./index.css";
import Details from "./pages/Details/Details";

export default function App() {
  const [isCalculator, setIsCalculator] = useState(true);
  const [incomeInfo, updateIncomeInfo] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      period: "Weekly",
      income: 0,
      type: "Gross",
      tax: 0.2,
    }
  );

  return (
    <div>
      {isCalculator ? (
        <Home
          setIsCalculator={setIsCalculator}
          incomeInfo={incomeInfo}
          updateIncomeInfo={updateIncomeInfo}
        />
      ) : (
        <Details
          setIsCalculator={setIsCalculator}
          incomeInfo={incomeInfo}
          updateIncomeInfo={updateIncomeInfo}
        />
      )}
    </div>
  );
}
