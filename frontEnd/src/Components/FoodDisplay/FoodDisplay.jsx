import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      
      <h2 className='food-display-title'>
        Top Picks Curated Just for You
      </h2>

      <p className='food-display-subtext'>
        Discover the most loved dishes around you — freshly prepared, beautifully served, and hand-picked to satisfy your cravings anytime.
      </p>

      <div className='food-display-list'>
        {food_list.map((item, index) => {
          if(category ==="All" || category === item.category){
              return  <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          }
        })}
      </div>

    </div>
  )
}

export default FoodDisplay
