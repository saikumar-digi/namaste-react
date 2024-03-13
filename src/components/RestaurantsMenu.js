import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  //custom hook useRestaurantMenu
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <div>Loading....</div>;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    const  categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-xl">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category)=><RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>)}
    </div>
  );
};

export default RestaurantsMenu;
