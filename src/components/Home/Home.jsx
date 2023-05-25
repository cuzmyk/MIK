import "./style.scss";

import Cards from "./../Cards/Cards";
import CardsNone from "./../CardsNone/CardsNone";

const Home = ({
  createCard,
  cardsData,
  setCardsData,
  cardСompute,
  cardEdit,
  backToCards,
  setActiveCard,
  setCardsLastIndex,
}) => {
  const cards = () => {
    if (cardsData.length === 0 || Object.keys(cardsData[0]).length === 0) {
      return <CardsNone createCard={createCard} />;
    } else {
      return cardsData.map((card, id) => {
        return (
          <Cards
            createCard={createCard}
            cardsData={cardsData}
            setCardsData={setCardsData}
            cardСompute={cardСompute}
            cardEdit={cardEdit}
            card={card}
            setActiveCard={setActiveCard}
            setCardsLastIndex={setCardsLastIndex}
            id={id}
            key={id}
          />
        );
      });
    }
  };

  const showData = () => {
    console.log(cardsData);
  };

  return (
    <div className="container">
      <nav className="nav">
        <ul>
          <li>
            <button onClick={backToCards}>
              <img src="./img/MIK.svg" alt="mik" />
            </button>
          </li>
          <li>
            <a href="!#">Карточки</a>
          </li>
          <li>
            <a href="#" onClick={showData}>
              СЕО-оптимизация
            </a>
          </li>
          <li>
            <a href="!#">Инструкции</a>
          </li>
          <li>
            <a href="!#">Войти</a>
          </li>
        </ul>
      </nav>

      <div className="cards">{cards()}</div>
    </div>
  );
};

export default Home;
