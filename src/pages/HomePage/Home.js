import React, { useState } from "react";
import Button from "../../components/Button/Button";
import CalculateButton from "../../components/Button/CalculateButton";
import CustomInput from "../../components/Input/CustomInput";
import InfoModal from "../../components/Modal/InfoModal";

const periods = ["Weekly", "Monthly", "Annualy"];
const types = ["Gross", "Net"];

const Home = ({ setIsCalculator, incomeInfo, updateIncomeInfo }) => {
  const [activePeriod, setActivePeriod] = useState(incomeInfo.period);
  const [activeType, setActiveType] = useState(incomeInfo.type);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-2/3 flex flex-col  text-center rounded-2xl px-10 sm:p-2 sm:w-full md:w-2/3 md:h-auto xl:w-2/4 xl:h-4/5  xl:px-10 py-10  bg-neutral-100 shadow-2xl">
        <div className="flex justify-center items-center mb-5">
          <div>
            <h1 className="text-2xl mt-4 text-center font-bold text-primary">
              Income Tax Calculator
            </h1>
          </div>
          <div className="w-10 h-10 flex justify-center rounded-full mt-6 cursor-pointer">
            <InfoModal />
          </div>
        </div>
        <h3 className="text-l text-center font-normal text-slate-600 mt-4">
          Choose Income Period
        </h3>

        <div className="w-full h-20 flex justify-around items-center px-6 gap-5 mt-4">
          {periods.map((period) => (
            <div className="w-1/3" key={period}>
              <Button
                text={period}
                active={period === activePeriod}
                onClick={() => {
                  updateIncomeInfo({ period });
                  setActivePeriod(period);
                }}
              />
            </div>
          ))}
        </div>
        <h3 className="text-l text-center font-normal text-slate-600 pt-4">
          What is your total income?
        </h3>
        <div className="w-full h-20 flex-column justify-around items-center px-6 gap-9 mt-4">
          <CustomInput
            placeholder="Enter your income"
            value={incomeInfo.value}
            onChange={(e) => {
              updateIncomeInfo({ income: e.target.value });
            }}
            id="income"
            type="number"
          />
        </div>

        <h3 className="text-l text-center font-normal text-slate-600 pt-4 ">
          Please choose the income type
        </h3>

        <div className="w-full h-20 flex justify-around items-center px-6 gap-9 mt-2">
          {types.map((type) => (
            <div className="w-1/2" key={type}>
              <Button
                text={`${type} Income`}
                active={activeType === type}
                onClick={() => {
                  updateIncomeInfo({ type });
                  setActiveType(type);
                }}
              />
            </div>
          ))}
        </div>
        <div className="w-full h-20 flex justify-around items-center px-6 gap-9 mt-5">
          <div className="w-full mb-4">
            <CalculateButton
              disabled={!incomeInfo.income}
              text="Calculate"
              onClick={() => {
                setIsCalculator(false);
                console.log(incomeInfo);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
