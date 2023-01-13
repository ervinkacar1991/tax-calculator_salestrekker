import React, { useState } from "react";
import Button from "../../components/Button/Button";
import BackIcon from "../../components/Icons/BackIcon";
import CalculatorIcon from "../../components/Icons/CalculatorIcon";
import DetailsTable from "../../components/Table/DetailsTable";

const periods = ["Weekly", "Monthly", "Annualy"];

const Details = ({ setIsCalculator, incomeInfo, updateIncomeInfo }) => {
  const [activePeriod, setActivePeriod] = useState(incomeInfo.period);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-2/3  flex flex-col text-center rounded-2xl px-10 sm:p-2 sm:w-full md:w-2/3 md:h-auto xl:w-2/4 xl:h-4/5  xl:px-10 py-10  bg-neutral-100 shadow-2xl">
        <div className="flex justify-between items-center mb-5">
          <div
            onClick={() => setIsCalculator(true)}
            className="w-10 h-10 flex justify-center items-center rounded-full bg-iconBg hover:bg-secondary mt-6 cursor-pointer"
          >
            <BackIcon />
          </div>

          <h1 className="text-2xl mt-4 text-center font-bold text-primary">
            Income Tax Details
          </h1>
          <div
            className="w-10 h-10 flex justify-center items-center rounded-full bg-iconBg hover:bg-secondary mt-6 cursor-pointer"
            onClick={() => setIsCalculator(true)}
          >
            <CalculatorIcon />
          </div>
        </div>

        {incomeInfo.period === "Weekly" && (
          <h3 className="text-l text-center font-normal text-slate-600">
            Your <span className="font-bold underline">weekly</span> net income
          </h3>
        )}
        {incomeInfo.period === "Monthly" && (
          <h3 className="text-l text-center font-normal text-slate-600">
            Your <span className="font-bold underline">monthly</span> net income
          </h3>
        )}
        {incomeInfo.period === "Annualy" && (
          <h3 className="text-l text-center font-normal text-slate-600">
            Your <span className="font-bold underline">annualy</span> net income
          </h3>
        )}
        <div className="w-full h-20 flex justify-around items-center px-6 gap-9 mt-4">
          {periods.map((period) => (
            <div className="w-1/3" key={period}>
              <Button
                text={period}
                active={period === activePeriod}
                onClick={() => {
                  setActivePeriod(period);
                  updateIncomeInfo({ period });
                }}
              />
            </div>
          ))}
        </div>

        <div className="w-full h-20 flex flex-column justify-around items-center px-6 gap-9 mt-4">
          <div className="w-full flex justify-center items-center px-4 py-2 bg-primary border border-solid border-gray-300 rounded-full">
            <p className="font-medium text-white">
              INCOME: ${incomeInfo.income}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <DetailsTable incomeInfo={incomeInfo} />
        </div>
      </div>
    </div>
  );
};

export default Details;
