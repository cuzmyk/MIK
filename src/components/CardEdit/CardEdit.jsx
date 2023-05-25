import "./style.scss";

const CardEdit = ({ cardsData, setCardsData, activeCard }) => {
  const {
    bussType,
    // commission,
    // costPrice,
    // costPriceAll,
    customerPrice,
    // delivery,
    image,
    marketing,
    otherCosts,
    product,
    // profit,
    purchasePrice,
    quantity,
    // ransomPercentage,
    // revenue,
    storage,
    warehouse,
  } = cardsData[activeCard];

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
        if (index === activeCard) {
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

  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newCardsData = [...cardsData]; // создаем копию массива
        newCardsData[activeCard] = {
          ...newCardsData[activeCard],
          image: e.target.result,
        }; // изменяем элемент с индексом cardsLastIndex
        setCardsData(newCardsData); // обновляем массив
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const handlePhotoDelete = () => {
    setCardsData((cardsData) =>
      cardsData.map((card, id) => {
        if (id === activeCard) {
          return {
            ...card,
            image: "",
          };
        } else {
          return card;
        }
      })
    );
  };

  return (
    <div className="card__stats">
      <div className="edit__photo">
        <div className="edit__photocontrols">
          <button>
            <img src="./img/penBlue.svg" alt="edit" />
            <input name="image" type="file" onChange={handlePhotoChange} />
          </button>
          <h2>Фото</h2>
          <button onClick={handlePhotoDelete}>
            <img src="./img/bin.svg" alt="bin" />
          </button>
        </div>
        <img src={image} alt={product} />
      </div>
      <div className="editcard__info">
        <h1 className="stats__title">{product}</h1>
        <div className="editinfo">
          <div>
            <h3 className="editinfo__desc">склад</h3>
            <select
              className="editinfo__selector"
              name="warehouse"
              onChange={handleInfoChange}
              defaultValue={warehouse}
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
            <h3 className="editinfo__desc">тип ведения бизнеса</h3>
            <select
              className="editinfo__selector"
              name="bussType"
              onChange={handleInfoChange}
              defaultValue={bussType}
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
            <h3 className="editinfo__desc">схема хранения</h3>
            <select
              className="editinfo__selector"
              name="storage"
              onChange={handleInfoChange}
              defaultValue={storage}
            >
              <option value="default" disabled>
                Схема хранения
              </option>
              <option value="FBO">FBO</option>
              <option value="FBS">FBS</option>
            </select>
          </div>
          <div>
            <h3 className="editinfo__desc">закупочная цена</h3>
            <input
              type="number"
              className="editinfo__input"
              name="purchasePrice"
              defaultValue={purchasePrice}
              onChange={handleInfoChange}
            />
          </div>

          <div>
            <h3 className="editinfo__desc">цена для покупатя</h3>
            <input
              type="number"
              className="editinfo__input"
              name="customerPrice"
              defaultValue={customerPrice}
              onChange={handleInfoChange}
            />
          </div>

          <div>
            <h3 className="editinfo__desc">партия шт.</h3>
            <input
              type="number"
              className="editinfo__input"
              name="quantity"
              defaultValue={quantity}
              onChange={handleInfoChange}
            />
          </div>

          <div>
            <h3 className="editinfo__desc">маркетинг и продвижение</h3>
            <input
              type="number"
              className="editinfo__input"
              name="marketing"
              defaultValue={marketing}
              onChange={handleInfoChange}
            />
          </div>

          <div>
            <h3 className="editinfo__desc">прочие затраты</h3>
            <input
              type="number"
              className="editinfo__input"
              name="otherCosts"
              defaultValue={otherCosts}
              onChange={handleInfoChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
