/*import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);


  const { name,cuisines,cloudi} = resInfo?.[0] ?? {};

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {resInfo.map((dish) => (
        <div key={dish.name} className="menu-items">
          <div>
            <h3>{dish.name}</h3>
          </div>
          <div>
            <h4>₹{dish.price}</h4>
          </div>
          <div>{dish.description}</div>
          <img className="dish-img" src={dish.imageUrl} alt="resto" />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
*/
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines ? cuisines.join(",") : ""} - {costForTwoMessage}
      </p>
      <h1>MENU</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"Rs."} {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
