const Banner = () => {
  return (
    <div>
      <div className="hero">
        <img
          className="hero h-[70vh] opacity-10 "
          // src="https://i.ibb.co/8mktLm8/donation.jpg"
          src="https://i.ibb.co/x1KRTKb/Rectangle-4281.png?fbclid=IwAR0q_Uj_fM6CYUO3uTI87iSBIL0oA3JoP9QPuy7ik-s1LeT2RgF4aZRd8iM"
          alt=""
        />
        <div className="hero-overlay  "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-16 text-3xl md:text-5xl text-black font-bold">
              I Grow By Helping People In Need
            </h1>
            <input
              type="text"
              placeholder="Search here...."
              className=" input input-bordered max-w-96 "
            />
            <button className="btn text-white bg-[#FF444A]">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
