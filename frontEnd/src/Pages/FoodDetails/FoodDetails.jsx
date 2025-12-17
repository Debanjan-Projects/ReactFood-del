import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
// import "./FoodDetails.css";

const FoodDetails = () => {
  const { id } = useParams();
  const { food_list } = useContext(StoreContext);

  // find clicked food item
  const food = food_list.find(item => item._id === id);

  if (!food) return <h1>Food Not Found</h1>;

  return (
    <div className="food-details">

      <img className="food-details-img" src={food.image} alt="" />

      <div className="food-details-info">
        <h1>{food.name}</h1>
        <p>{food.description}</p>

        <h3>Price: ${food.price}</h3>

        <h2>Available Menu</h2>

        <ul>
          {food.availableMenu?.length > 0 ? (
            food.availableMenu.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <li>No menu options available</li>
          )}
        </ul>
      </div>

    </div>
  );
};

export default FoodDetails;
