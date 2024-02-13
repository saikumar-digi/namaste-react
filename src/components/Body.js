import { useState } from "react";
import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState(resData);

  // const arr = useState(resData);
  // listOfRestaurants = arr[0]
  // setListOfRestaurants = arr[1] // tiger the diff algorith 
 
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const  filteredList =  listOfRestaurants.filter((res) => res.rating > 4);
           setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
