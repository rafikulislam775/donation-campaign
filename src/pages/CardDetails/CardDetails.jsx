import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";

const CardDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const cards = useLoaderData();
  const [card, setCard] = useState([]);

  useEffect(() => {
    const findCard = cards.find((card) => card.id === intId);
    setCard(findCard);
  }, [cards, intId]);
  console.log(card);

  return (
    <div>
      {
        <Details card = {card} ></Details>
      }
    </div>
  );
};

export default CardDetails;
