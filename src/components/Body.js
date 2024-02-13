import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
