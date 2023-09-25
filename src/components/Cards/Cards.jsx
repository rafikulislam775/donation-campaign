import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Cards = ({ data }) => {
  const {
    id,
    img,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
  } = data;
  console.log(data);
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
      <NavLink to={`/cardDetails/${id}`}>
        <div
          className="relative flex flex-col rounded-xl  bg-clip-border text-black shadow-md"
          style={cardBg}
        >
          <div className="relative mx-4 mt-4  overflow-hidden rounded-xl  bg-clip-border">
            <img src={img} />
          </div>
          <div className="p-6">
            <span className=" rounded p-1 px-2 font-bold" style={titleBg}>
              {category}
            </span>

            {/* <div
            className="mb-2 flex items-center justify-between "
            style={textColor}
          >
            <p className="block font-sans text-base font-medium leading-relaxed antialiased">
              {title}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed  antialiased">
              $ {price}
            </p>
          </div> */}
            <p
              className="block mt-3 font-sans text-base font-extrabold leading-relaxed antialiased"
              style={textColor}
            >
              {title}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
Cards.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Cards;
