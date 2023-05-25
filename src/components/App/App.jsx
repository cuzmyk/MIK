import "./_vars.scss";
import "./_reset.scss";
import "./_base.scss";

import { useState } from "react";
import Home from "./../Home/Home";
import CreateCard from "./../CreateCard/CreateCard";
import myCards from "../../myCards.js";
import CardCalculations from "../CardCalculations/CardCalculations";

const App = () => {
  const [cardsData, setCardsData] = useState(myCards);
  const [cardsLastIndex, setCardsLastIndex] = useState(-1);
  const [showCreateCard, setShowCreateCard] = useState(false);
  const [showCardCalculations, setShowCardCalculations] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const [activeMenuItem, setActiveMenuItem] = useState("stats");

  const createCard = () => {
    setShowCreateCard(!showCreateCard);
    setCardsLastIndex((cardsLastIndex) => cardsLastIndex + 1);
  };
  const backToCards = () => {
    setShowCreateCard(false);
    setShowCardCalculations(false);
    if (cardsData.length - 1 !== cardsLastIndex) {
      setCardsLastIndex(cardsData.length);
    }
  };

  const cardСompute = (event) => {
    const cardId = event.currentTarget.parentNode.getAttribute("id");
    const index = cardsData.findIndex((card) => card.index === +cardId);
    setActiveMenuItem("stats");
    setActiveCard(index);
    setShowCardCalculations(true);
  };

  const cardEdit = (event) => {
    const cardId = event.currentTarget.parentNode.parentNode.getAttribute("id");
    const index = cardsData.findIndex((card) => card.index === +cardId);
    setActiveMenuItem("edit");
    setActiveCard(index);
    setShowCardCalculations(true);
  };

  const homeStage = () => {
    if (showCreateCard) {
      return (
        <CreateCard
          cardsData={cardsData}
          setCardsData={setCardsData}
          cardsLastIndex={cardsLastIndex}
          backToCards={backToCards}
        />
      );
    } else if (showCardCalculations) {
      return (
        <CardCalculations
          backToCards={backToCards}
          cardsData={cardsData}
          activeCard={activeCard}
          setCardsData={setCardsData}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
      );
    } else {
      return (
        <Home
          createCard={createCard}
          cardsData={cardsData}
          setCardsData={setCardsData}
          setActiveCard={setActiveCard}
          cardСompute={cardСompute}
          cardEdit={cardEdit}
          backToCards={backToCards}
          activeCard={activeCard}
          setCardsLastIndex={setCardsLastIndex}
        />
      );
    }
  };

  return <div className="App">{homeStage()}</div>;
};

export default App;
