const Details = ({ card }) => {
  const { id, img, description, title, price } = card;

  const handleDonation = () => {
    const addToDonation = [];
    const donatedItems = JSON.parse(localStorage.getItem("donation"));
    if (!donatedItems) {
      addToDonation.push(card);
      localStorage.setItem("donation", JSON.stringify(addToDonation));
    } else {
      const isExist = donatedItems.find((data) => data.id === id);
      if (!isExist) {
        addToDonation.push(...donatedItems, card);
        localStorage.setItem("donation", JSON.stringify(addToDonation));
        alert("added");
      } else {
        alert("already added");
      }
    }
    console.log(addToDonation);
  };
  console.log(card);

  return (
    <div>
      <div className=" mt-10 container mx-auto flex justify-center items-center   ">
        <div className="  flex-1 card card-compact  bg-base-100 shadow-xl">
          <div className="relative">
            <img className="w-full" src={img} alt="" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-black bg-opacity-70">
              <button
                onClick={handleDonation}
                className="btn text-white bg-red-600"
              >
                Donate $ {price}
              </button>
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-title font-bold text-2xl  ">{title}</h2>
            <p className=" text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
