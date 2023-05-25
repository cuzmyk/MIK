import "./style.scss";

import Categories from "./../Categories/Categories";

import { database } from "../../data.js";
import { useState } from "react";
import Products from "../Products/Products";

const CardProduct = ({
  cardsData,
  setCardsData,
  cardsLastIndex,
  prevStage,
  nextStage,
}) => {
  const [productMissing, setProductMissing] = useState(true);

  const categoriesList = database.reduce(
    (accumulator, currentValue) => {
      if (!accumulator.set.has(currentValue[0])) {
        accumulator.set.add(currentValue[0]);
        accumulator.array.push(currentValue[0]);
      }
      return accumulator;
    },
    { set: new Set(), array: [] }
  ).array;

  const cat = categoriesList.map((category, id) => {
    return <Categories category={category} key={id} />;
  });

  const [selectedCaregory, setSelectedCaregory] = useState("");
  const handleCaregoryChange = (event) => {
    setSelectedCaregory(event.target.value);
  };

  const neededCategory = database.filter(
    (item) => item[0] === selectedCaregory
  );

  const prod = neededCategory.map((item, id) => {
    return <Products product={item[1]} key={id} />;
  });

  const handleProductsChange = (event) => {
    setProductMissing(false);
    setCardsData((data) => [
      ...data.slice(0, cardsLastIndex),
      {
        ...data[cardsLastIndex],
        index: Date.now(),
        product: event.target.value,
        commission: database.find((card) => card[1] === event.target.value)[2],
        ransomPercentage: database.find(
          (card) => card[1] === event.target.value
        )[4],
        bussType: "",
        costPrice: 0,
        costPriceAll: 0,
        customerPrice: 0,
        delivery: 55,
        image: "",
        marginality: 0,
        marketing: 0,
        otherCosts: 0,
        profit: 0,
        purchasePrice: 0,
        quantity: 0,
        revenue: 0,
        storage: "",
        warehouse: "",
      },
      ...data.slice(cardsLastIndex + 1),
    ]);
  };

  return (
    <div className="create__wrapper">
      <div>
        <h1 className="create__title">Создание карточки</h1>
        <h2 className="create__subtitle">Категории</h2>
      </div>

      <div className="category__selectors">
        <select
          className="category__selector"
          name="category"
          id="category"
          value={selectedCaregory}
          onChange={handleCaregoryChange}
        >
          <option value="default">Выберите категорию</option>
          {cat}
        </select>
        <select
          className="category__selector"
          name="product"
          id="product"
          //value={selectedProduct}
          onChange={handleProductsChange}
        >
          <option value="default">Выберите продукт</option>
          {prod}
        </select>
      </div>

      <div className="create__btns">
        <button className="back" onClick={prevStage}>
          назад
        </button>

        {productMissing ? (
          <button className="btn btn--continue btn--missingProduct">
            далее
          </button>
        ) : (
          <button className="btn btn--continue" onClick={nextStage}>
            далее
          </button>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
