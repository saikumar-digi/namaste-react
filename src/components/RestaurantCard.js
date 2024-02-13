const RestaurantCard = (props) => {
    const { resList } = props;
    const {image_url,name,cuisines,rating,delivery_time} =resList
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="res-logo" alt="res-logo" src={image_url} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{rating}stars</h4>
        <h4>{delivery_time} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;