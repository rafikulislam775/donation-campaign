import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [noFound, setNoFound] = useState(false);
  
  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donation"));
    if (!donatedItems) {
      setNoFound(true);
    } else {
      setDonated(donatedItems);
      setNoFound(false);
    }
  }, []);

  return (
    <div>
      <div>
        {noFound ? (
          <div>
            <h1 className="flex justify-center items-center h-[70vh] mb-5 text-5xl font-bold opacity-30">
              No Donation Found !!
            </h1>
          </div>
        ) : (
          <div className="container m-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {donated.map((card, index) => (
              <DonationCard key={index} card={card}></DonationCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
