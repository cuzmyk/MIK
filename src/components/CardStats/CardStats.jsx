import "./style.scss";

const CardStats = ({ cardsData, activeCard }) => {
  const {
    // bussType,
    commission,
    costPrice,
    costPriceAll,
    customerPrice,
    delivery,
    image,
    // marketing,
    // otherCosts,
    product,
    profit,
    // purchasePrice,
    quantity,
    ransomPercentage,
    revenue,
    // storage,
    // warehouse,
  } = cardsData[activeCard];

  return (
    <div className="card__stats">
      <div className="stats__photo">
        <img src={image} alt={product} />
      </div>
      <div className="stats__info">
        <h1 className="stats__title">{product}</h1>
        <div className="stats__wbpart">
          <div className="wbpart__item">
            <h3>Доставка WB</h3>
            <p>{delivery} руб.</p>
          </div>
          <div className="wbpart__item">
            <h3>Комиссия WB</h3>
            <p>{commission} %</p>
          </div>
          <div className="wbpart__item">
            <h3>Хранение WB</h3>
            <p>0 руб.</p>
          </div>
          <div className="wbpart__item">
            <h3>Процент выкупа</h3>
            <p>{ransomPercentage} %</p>
          </div>
        </div>
        <div className="stats__summary">
          <div>
            <div className="quantity__title">
              <h2>Сводка по 1 шт.</h2>
            </div>
            <div className="quantity__items">
              <div className="quantity__item">
                <h3>Цена продажи</h3>
                <p>{customerPrice} р.</p>
              </div>
              <div className="quantity__item">
                <h3>К получению</h3>
                <p>{(costPrice / quantity).toFixed(2)} р.</p>
              </div>
              <div className="quantity__item">
                <h3>Себестоимость</h3>
                <p>{(revenue / quantity).toFixed(2)} р.</p>
              </div>
              <div className="quantity__item">
                <h3>Прибыль</h3>
                <p>{(profit / quantity).toFixed(2)} р.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="quantity__title">
              <h2>Сводка по партии</h2>
            </div>
            <div className="quantity__items">
              <div className="quantity__item">
                <h3>Выручка</h3>
                <p>{costPriceAll.toFixed()} р.</p>
              </div>
              <div className="quantity__item">
                <h3>К получению</h3>
                <p>{costPrice.toFixed()} р.</p>
              </div>
              <div className="quantity__item">
                <h3>Себестоимость</h3>
                <p>{revenue.toFixed()} р.</p>
              </div>
              <div className="quantity__item">
                <h3>Прибыль</h3>
                <p>{profit.toFixed()} р.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStats;
