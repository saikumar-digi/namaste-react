import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const [showIndex , setShowIndex] = useState(0)

  //custom hook useRestaurantMenu
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <div>Loading....</div>;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-xl">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category , index) => (
        //controled component lifting state up 
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true :false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
