const CardsNone = ({ createCard }) => {
  return (
    <div className="cards__none">
      <h2>У Вас пока что нет карточек</h2>
      <button className="btn" onClick={createCard}>
        Создать картчоку
      </button>
    </div>
  );
};

export default CardsNone;
