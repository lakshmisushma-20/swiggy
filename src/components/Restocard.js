import { CDN_URL } from "../utils/constant";

const Restocard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  return (
    <div className="rescard">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="resto" />
      <h3>{name}</h3>
      <h6>{cuisines.join(",")}</h6>
      <h6>{avgRating} stars</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla?.slaString}</h6>
    </div>
  );
};

export default Restocard;
