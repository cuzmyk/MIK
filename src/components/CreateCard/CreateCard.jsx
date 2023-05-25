import "./style.scss";
import CardProduct from "../CardProduct/CardProduct";
import CardInfo from "../CardInfo/CardInfo";
import CardPhoto from "../CardPhoto/CardPhoto";
import React, { useCallback, useEffect, useState } from "react";

const CreateCard = ({
  cardsData,
  setCardsData,
  cardsLastIndex,
  backToCards,
}) => {
  const [activeStage, setActiveStage] = useState(0);
  const [stageCounter, setStageCounter] = useState(0);

  const getActiveStage = useCallback(() => {
    const nextStage = () => {
      setStageCounter(stageCounter + 1);
    };

    const prevStage = () => {
      setStageCounter(stageCounter - 1);
    };

    switch (stageCounter) {
      case -1:
        return backToCards();
      case 0:
        return (
          <CardProduct
            cardsData={cardsData}
            setCardsData={setCardsData}
            cardsLastIndex={cardsLastIndex}
            prevStage={prevStage}
            nextStage={nextStage}
          />
        );
      case 1:
        return (
          <CardInfo
            setCardsData={setCardsData}
            cardsLastIndex={cardsLastIndex}
            prevStage={prevStage}
            nextStage={nextStage}
          />
        );
      case 2:
        return (
          <CardPhoto
            cardsData={cardsData}
            setCardsData={setCardsData}
            cardsLastIndex={cardsLastIndex}
            prevStage={prevStage}
            nextStage={nextStage}
          />
        );
      case 3:
        return backToCards();
      default:
        console.log(`Invalid stageCounter value: ${stageCounter}`);
        return null;
    }
  }, [backToCards, stageCounter, cardsData, setCardsData, cardsLastIndex]);

  useEffect(() => {
    setActiveStage(getActiveStage());
  }, [getActiveStage]);

  return (
    <div className="create-background">
      <div className="container container--create">
        <button
          className="close"
          onClick={backToCards}
          aria-label="Close"
        ></button>

        {activeStage}
      </div>
    </div>
  );
};

export default CreateCard;
