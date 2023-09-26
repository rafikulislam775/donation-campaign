import { NavLink } from "react-router-dom";

const DonationCard = ({ card }) => {
  const {
    id,
    img,
    title,
    price,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
    text_button_bg_color,
  } = card;
  console.log(card);
  const btnBg = {
    backgroundColor: text_button_bg_color,
  };
  const cardBg = {
    backgroundColor: card_bg_color,
  };
  const titleBg = {
    backgroundColor: category_bg_color,
    color: text_color,
  };

  const textColor = {
    color: text_color,
  };
  return (
    <div>
      <div
        className="relative flex flex-row rounded-xl shadow-md"
        style={cardBg}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={img} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <span className=" rounded p-1 px-2 font-bold" style={titleBg}>
            {category}
          </span>
          <h4 className="my-2 block font-sans text-2xl font-semibold h-12 ">
            {title}
          </h4>
          <p
            className="mb-8 block font-sans text-base font-extrabold leading-relaxed antialiased"
            style={textColor}
          >
            $ {price}
          </p>
          <a className="inline-block" href="#">
            <NavLink to={`/cardDetails/${id}`}>
              <button className="btn  text-white" type="button" style={btnBg}>
                View Details
              </button>
            </NavLink>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
