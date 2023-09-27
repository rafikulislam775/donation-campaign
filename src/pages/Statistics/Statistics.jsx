import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Chart } from "react-google-charts";

const Statistics = () => {
  const allData = useLoaderData();
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const totalPrices = allData.reduce(
      (preValue, curValue) => preValue + parseFloat(curValue.price),
      0
    );
    setTotalPrice(totalPrices);
    const getData = JSON.parse(localStorage.getItem("donation"));
    const totalDonation = getData.reduce(
      (preValue, curValue) => preValue + parseFloat(curValue.price),
      0
    );
    setPrice(totalDonation);
  }, [allData]);

  const number = 55;
  const data = [
    ["Task", "Hours per Day"],
    ["Work", totalPrice],
    // ["Eat", 22, "color: #ff0000"],
    ["Platinum", price],
  ];
  const options = {
    title: "My Daily Activities",
    // legend for position change
    // legend: { position: "bottom" },
    legend: "none", // Hide the default legend

    // index k dore color change kora
    slices: {
      0: { color: "green", maxLines: 3 },
      1: { color: "pink" },
    },
  };

  return (
    <div className="">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <div className="flex justify-center gap-5">
        <div className="flex items-center  gap-2">
          <div className="w-16 h-3 bg-green-500 mt-1"></div>
          work
        </div>
        <div className="flex items-center  gap-2">
          <div className="w-16 h-3 bg-pink-200 mt-1"></div>
          Platinum
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Statistics;
