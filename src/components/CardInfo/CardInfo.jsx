import "./style.scss";

const CardInfo = ({ setCardsData, cardsLastIndex, prevStage, nextStage }) => {
  const calculateCostPriceAll = (card) => {
    return +card.customerPrice * +card.quantity;
  };

  const calculateCostPrice = (card) => {
    return (
      (+card.customerPrice * ((100 - +card.commission) / 100) -
        +card.delivery) *
      +card.quantity
    );
  };

  const calculateRevenue = (card) => {
    return +card.costPrice - +card.marketing - +card.otherCosts;
  };

  const calculateProfit = (card) => {
    return +card.customerPrice * +card.quantity - +card.revenue;
  };

  const calculateMarginality = (card) => {
    return (+card.profit / +card.quantity / +card.customerPrice) * 100;
  };

  const handleInfoChange = (event) => {
    setCardsData((data) => {
      return data.map((card, index) => {
        if (index === cardsLastIndex) {
          const updatedCard = {
            ...card,
            [event.target.name]: event.target.value,
          };
          updatedCard.costPriceAll = calculateCostPriceAll(updatedCard);
          updatedCard.costPrice = calculateCostPrice(updatedCard);
          updatedCard.revenue = calculateRevenue(updatedCard);
          updatedCard.profit = calculateProfit(updatedCard);
          updatedCard.marginality = calculateMarginality(updatedCard);
          return updatedCard;
        }
        return card;
      });
    });
  };

  return (
    <div className="create__wrapper">
      <div>
        <h1 className="create__title">Создание карточки</h1>
        <h2 className="create__subtitle">
          заполните как можно больше полей, чтобы мы смогли всё посчитать
        </h2>
      </div>

      <div className="info">
        <div>
          <h3 className="info__desc">склад</h3>
          <select
            className="info__selector"
            name="warehouse"
            onChange={handleInfoChange}
            defaultValue={"default"}
          >
            <option value="default" disabled>
              Выберете склад
            </option>
            <option value="Коледино">Коледино</option>
            <option value="Электросталь">Электросталь</option>
            <option value="Казань">Казань</option>
            <option value="Краснодар ">Краснодар</option>
            <option value="Новосибирск ">Новосибирск</option>
          </select>
        </div>

        <div>
          <h3 className="info__desc">тип ведения бизнеса</h3>
          <select
            className="info__selector"
            name="bussType"
            onChange={handleInfoChange}
            defaultValue={"default"}
          >
            <option value="default" disabled>
              Тип бизнеса
            </option>
            <option value="ИП (Упрощёнка)">ИП (Упрощёнка)</option>
            <option value="Самозанятость">Самозанятость</option>
            <option value="ООО">ООО</option>
          </select>
        </div>

        <div>
          <h3 className="info__desc">схема хранения</h3>
          <select
            className="info__selector"
            name="storage"
            onChange={handleInfoChange}
            defaultValue={"default"}
          >
            <option value="default" disabled>
              Схема хранения
            </option>
            <option value="FBO">FBO</option>
            <option value="FBS">FBS</option>
          </select>
        </div>
        <div>
          <h3 className="info__desc">закупочная цена</h3>
          <input
            type="number"
            className="info__input"
            name="purchasePrice"
            onChange={handleInfoChange}
          />
        </div>

        <div>
          <h3 className="info__desc">цена для покупатя</h3>
          <input
            type="number"
            className="info__input"
            name="customerPrice"
            onChange={handleInfoChange}
          />
        </div>

        <div>
          <h3 className="info__desc">партия шт.</h3>
          <input
            type="number"
            className="info__input"
            name="quantity"
            onChange={handleInfoChange}
          />
        </div>

        <div>
          <h3 className="info__desc">маркетинг и продвижение</h3>
          <input
            type="number"
            className="info__input"
            name="marketing"
            onChange={handleInfoChange}
          />
        </div>

        <div>
          <h3 className="info__desc">прочие затраты</h3>
          <input
            type="number"
            className="info__input"
            name="otherCosts"
            onChange={handleInfoChange}
          />
        </div>
      </div>

      <div className="create__btns">
        <button className="back" onClick={prevStage}>
          назад
        </button>

        <button className="btn btn--continue" onClick={nextStage}>
          далее
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
