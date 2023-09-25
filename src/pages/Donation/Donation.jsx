import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

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
          <div>
            <div className="container m-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {isShow
                ? donated.map((card, index) => (
                    <DonationCard key={index} card={card}></DonationCard>
                  ))
                : donated
                    .slice(0, 4)
                    .map((card, index) => (
                      <DonationCard key={index} card={card}></DonationCard>
                    ))}
            </div>
            {donated.length > 4 && (
              <div className="flex justify-center my-10">
                <button
                  onClick={() => setIsShow(!isShow)}
                  className="btn px-10 bg-[#009444] text-white "
                >
                  {isShow ? "See Less" : "See More"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
