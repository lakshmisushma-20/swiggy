import Restocard from "./Restocard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestraunt, setlistOfRestraunt] = useState([]);
  const [filteredRestraunt, setfilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(listOfRestraunt);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("i am fetch ");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you,re offline!!Please check network</h1>;

  return listOfRestraunt && listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <div className="search m-4 p-4 flex items-center">
            <input
              type="text"
              className="border border-solid border-black "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-pink-400 m-4  rounded-lg"
              onClick={() => {
                console.log(searchText, listOfRestraunt);
                const filteredRestraunt = listOfRestraunt.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                console.log(filteredRestraunt, "its filtered");
                setfilteredRestraunt(filteredRestraunt);
              }}
            >
              Search{" "}
            </button>
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                const filteredList = listOfRestraunt.filter(
                  (res) => res.info.avgRating > 4
                );
                setlistOfRestraunt(filteredList);
              }}
            >
              Top Rated Restraunt{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestraunt.map((restaurant) => {
          return (
            <Link to={"/restaurants/" + restaurant.info.id}>
              <Restocard key={restaurant.info.id} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
