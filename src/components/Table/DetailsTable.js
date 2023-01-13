import React from "react";

const DetailsTable = ({ incomeInfo }) => {
  const calculateValue = (period) => {
    const total = +incomeInfo.income;
    let res;

    if (period === "Weekly") {
      if (incomeInfo.period === "Weekly") {
        res = total;
      } else if (incomeInfo.period === "Monthly") {
        res = total / 4;
      } else {
        res = total / 52;
      }
    } else if (period === "Monthly") {
      if (incomeInfo.period === "Weekly") {
        res = total * 4;
      } else if (incomeInfo.period === "Monthly") {
        res = total;
      } else {
        res = total / 12;
      }
    } else {
      if (incomeInfo.period === "Weekly") {
        res = total * 52;
      } else if (incomeInfo.period === "Monthly") {
        res = total * 12;
      } else {
        res = total;
      }
    }

    const gross =
      incomeInfo.type === "Gross" ? res : res + res * incomeInfo.tax;

    const net = incomeInfo.type === "Net" ? res : res - res * incomeInfo.tax;

    const tax = res * incomeInfo.tax;
    return {
      gross: gross.toFixed(2),
      net: net.toFixed(2),
      tax: tax.toFixed(2),
    };
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Frequency
            </th>
            <th scope="col" className="px-6 py-3">
              Gross
            </th>
            <th scope="col" className="px-6 py-3">
              Tax
            </th>
            <th scope="col" className="px-6 py-3">
              Net
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Weekly
            </th>
            <td className="px-6 py-4">${calculateValue("Weekly").gross}</td>
            <td className="px-6 py-4">${calculateValue("Weekly").tax}</td>
            <td className="px-6 py-4">${calculateValue("Weekly").net}</td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Monthly
            </th>
            <td className="px-6 py-4">${calculateValue("Monthly").gross}</td>
            <td className="px-6 py-4">${calculateValue("Monthly").tax}</td>
            <td className="px-6 py-4">${calculateValue("Monthly").net}</td>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Annualy
            </th>
            <td className="px-6 py-4">${calculateValue("Annualy").gross}</td>
            <td className="px-6 py-4">${calculateValue("Annualy").tax}</td>
            <td className="px-6 py-4">${calculateValue("Annualy").net}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
