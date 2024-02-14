import Restocard from "./Restocard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestraunt, setlistOfRestraunt] = useState([]);
  const [filteredRestraunt, setfilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body rendered");

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

  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText, listOfRestraunt);
              const filteredRestraunt = listOfRestraunt.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestraunt(filteredRestraunt);
            }}
          >
            Search{" "}
          </button>
        </div>
        <button
          className="filter-butn"
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
      <div className="container">
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
