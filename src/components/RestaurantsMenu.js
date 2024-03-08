import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantsMenu = () => {
  const {resId} = useParams();
//custom hook useRestaurantMenu
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <div>Loading....</div>;

  console.log(resInfo?.data?.cards[0].card.card.info.name);
  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3>{avgRating} ⭐</h3>
      <h2>Menu</h2>
      <ul>
        <h3>{itemCards[0].card.info.category}</h3>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price /100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
