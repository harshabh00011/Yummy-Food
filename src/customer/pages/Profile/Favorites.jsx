import React from 'react'
import RestaurantCard from '../HomePage/RestaurantCard'
import { restaurants } from '../../../Data/Restaurants'

//const favorite=[1,1,1,1,1,1,1]
const Favorites = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-center text-center'>My Favorites</h1>

      <div className='flex flex-wrap justify-center'>
        {restaurants.slice(0,6).map((item)=><RestaurantCard item={item}/>)}
      </div>
    </div>
  )
}

export default Favorites
