import "./style.scss";

const CardPhoto = ({
  cardsData,
  setCardsData,
  cardsLastIndex,
  prevStage,
  nextStage,
}) => {
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newCardsData = [...cardsData]; // создаем копию массива
        newCardsData[cardsLastIndex] = {
          ...newCardsData[cardsLastIndex],
          image: e.target.result,
        }; // изменяем элемент с индексом cardsLastIndex
        setCardsData(newCardsData); // обновляем массив
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="create__wrapper">
      <div>
        <h1 className="create__title">Загрузите фотографию</h1>
        <h2 className="create__subtitle">
          это позволит легче ориентироваться среди карточек
        </h2>
      </div>

      <button className="photo__holder">
        {cardsData[cardsLastIndex].image ? (
          <img src={cardsData[cardsLastIndex].image} alt="card" />
        ) : (
          <div>
            <h2 className="photo__title">Выберете или перетащите файл</h2>
            <h3 className="photo__subtitle">это можно будет сделать позднее</h3>
          </div>
        )}
        <input
          type="file"
          className="photo__input"
          onChange={handleImageChange}
        />
      </button>

      <div className="create__btns">
        <button className="back" onClick={prevStage}>
          назад
        </button>

        <button className="btn btn--continue" onClick={nextStage}>
          создать карточку
        </button>
      </div>
    </div>
  );
};

export default CardPhoto;
