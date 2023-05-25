import "./style.scss";

import CardStats from "./../CardStats/CardStats";
import CardEdit from "./../CardEdit/CardEdit";
import { useEffect } from "react";

const CardCalculations = ({
  backToCards,
  cardsData,
  activeCard,
  setCardsData,
  activeMenuItem,
  setActiveMenuItem,
}) => {
  const handleMenuClick = (event) => {
    const menuItem = event.currentTarget.getAttribute("data-menu-item");
    setActiveMenuItem(menuItem);
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case "stats":
        return <CardStats cardsData={cardsData} activeCard={activeCard} />;
      case "edit":
        return (
          <CardEdit
            cardsData={cardsData}
            setCardsData={setCardsData}
            activeCard={activeCard}
          />
        );

      default:
        return null;
    }
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
            <a href="#" data-menu-item="stats" onClick={handleMenuClick}>
              Информация
            </a>
          </li>
          <li>
            <a href="#" data-menu-item="edit" onClick={handleMenuClick}>
              Редактировать
            </a>
          </li>
          <li>
            <a href="#">Партии</a>
          </li>
          <li>
            <a href="#">Войти</a>
          </li>
        </ul>
      </nav>

      <div>{renderContent()}</div>
    </div>
  );
};

export default CardCalculations;
