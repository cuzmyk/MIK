import "./style.scss";

const Cards = ({
  createCard,
  cardsData,
  setCardsData,
  cardСompute,
  cardEdit,
  setCardsLastIndex,
  card,
  id,
}) => {
  const { index, product, image, customerPrice, profit, marginality } = card;

  const deleteCard = (event) => {
    const cardId = event.currentTarget.parentNode.parentNode.getAttribute("id");
    setCardsData((cardsData) =>
      cardsData.filter((card) => card.index !== +cardId)
    );
    setCardsLastIndex((old) => old - 1);
  };

  return (
    <div>
      <div className="cards__card" id={index}>
        <div className="card__info" onClick={cardСompute}>
          <div className="card__photo">
            <img src={image} alt="card" />
          </div>
          <div className="card__field">
            <h3>Название</h3>
            <p>{product}</p>
          </div>
          <div className="card__field">
            <h3>Цена реализации</h3>
            <p>{customerPrice} руб.</p>
          </div>
          <div className="card__field">
            <h3>Прибыль с партии</h3>
            <p>{profit} руб.</p>
          </div>
          <div className="card__field">
            <h3>Маржинальность</h3>
            <p>{marginality.toFixed()} %</p>
          </div>
        </div>
        <div className="card__controls">
          <button className="card__edit" onClick={cardEdit}>
            <img src="./img/pen.svg" alt="" />
          </button>
          <button className="card__delete" onClick={deleteCard}>
            <img src="./img/bin.svg" alt="" />
          </button>
        </div>
      </div>

      {id === cardsData.length - 1 && (
        <button className="btn btn--create" onClick={createCard}>
          Создать картчоку
        </button>
      )}
    </div>
  );
};

export default Cards;
