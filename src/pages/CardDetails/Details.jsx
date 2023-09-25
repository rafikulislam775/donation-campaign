const Details = ({ card }) => {
  const { img, description, title, price } = card;
  return (
    <div>
      <div className=" mt-10 container mx-auto flex justify-center items-center   ">
        <div className="  flex-1 card card-compact  bg-base-100 shadow-xl">
          <div className="relative">
            <img className="w-full" src={img} alt="" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-black bg-opacity-70">
              <button className="btn text-white bg-red-600">
                Donate $ {price}
              </button>
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
