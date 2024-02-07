import useRestreauntMenu from "../utils/useRestreauntMenu";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const { resId } = useParams();
  console.log("1.", resId);
  const resInfo = useRestreauntMenu(resId);
  console.log("last.", resInfo);

  /*useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    let restaurentName = "meghana";
    if (resId !== "Meghana Foods") restaurentName = "other";
    let url = `https://raw.githubusercontent.com/lakshmisushma-20/TestApis/main/${restaurentName}-restaurant-menu.json`;

    const data = await fetch(url);
    const json = await data.json();
    console.log(json);

    setResInfo(json);
  };
*/
  const { name } = resInfo ? resInfo[0] : {};

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

export default RestrauntMenu;
