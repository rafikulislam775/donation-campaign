import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Chart } from "react-google-charts";

const Statistics = () => {
  const allData = useLoaderData();
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    const totalPrices = allData.reduce(
      (preValue, curValue) => preValue + parseFloat(curValue.price),
      0
    );
    setTotalPrice(totalPrices);
    const getData = JSON.parse(localStorage.getItem("donation"));
    if (getData) {
      const totalDonation = getData.reduce(
        (preValue, curValue) => preValue + parseFloat(curValue.price),
        0
      );
      setPrice(totalDonation);
    } else {
      setNoFound(true);
    }
  }, [allData]);
  // console.log(noFound);

  const data = [
    ["Task", "Donation pie chart"],
    ["totalPrice", totalPrice],
    // ["Eat", 22, "color: #ff0000"],
    ["donation price", price],
  ];
  const options = {
    // title: "My Daily Activities",
    // legend for position change
    // legend: { position: "bottom" },
    legend: "none", // Hide the default legend

    // index k dore color change kora
    slices: {
      0: { color: "Red" },
      1: { color: "#00C49F" },
    },
  };

  return (
    <div>
      {noFound ? (
        <div>
          <h1 className="flex justify-center items-center h-[70vh] mb-5 text-5xl font-bold opacity-30">
            No Donation Found !!
          </h1>
        </div>
      ) : (
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
              Your Donation
              <div className="w-16 h-3 bg-[#00C49F] mt-1"></div>
            </div>
            <div className="flex items-center  gap-2">
              {" "}
              Total Donation
              <div className="w-16 h-3 bg-red-500 mt-1"></div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
