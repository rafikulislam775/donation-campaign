import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [noFound, setNoFound] = useState(false);
  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donation"));
    if (donated) {
      setDonated(donatedItems);
    } else {
      setNoFound("no donation found");
    }
  }, []);
  console.log(donated, noFound);

  return (
    <div>
      <div className="container m-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {donated.map((card, index) => (
          <DonationCard key={index} card={card}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Donation;
