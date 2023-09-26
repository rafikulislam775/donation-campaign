import { useEffect, useState } from "react";

const Statistics = () => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("donation"));
    const totalDonation = getData.reduce(
      (preValue, curValue) => preValue + parseFloat(curValue.price),
      0
    );
    setPrice(totalDonation);
  }, []);
  console.log(price);
  return (
    <div>
      <h3> hello </h3>
    </div>
  );
};

export default Statistics;
