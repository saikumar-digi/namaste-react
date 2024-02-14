import { useEffect, useState } from "react";
import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState(resData);

  // const arr = useState(resData);
  // listOfRestaurants = arr[0]
  // setListOfRestaurants = arr[1] // tiger the diff algorith 


  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9358189&lng=77.6178125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
          const json = data.json();
          console.log(json);
      }
 
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
