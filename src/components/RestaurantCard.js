import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resList } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resList.info;
  return (
    <div className="m-9 p-4 w-[240] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="w-64 h-36 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} minutes</h4>
    </div>
  );
};

//Higher Order Component

//input  - resturantcard ==> ResuturantcardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
          <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
