import React from 'react'
import { Button, Card } from "@mui/material";

const MenuCard = ({item1}) => {
    const handleAddItemToCart=()=>{
        console.log("handle add item to cart")
    }
  return (
    <Card className='p-5 lg:flex items-center justify-between box'>

        <div className='lg:flex items-center lg:space-x-5'>
            <img className='w-[7rem] h-[7rem] object-cover' src="https://static.toiimg.com/thumb/56868564.cms?imgsize=1948751&width=800&height=800" alt="" />
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>{`Margherita`}</p>
                <p>₹{499}</p>
                <p className='text-gray-400'>{'Pizza'}</p>
            </div>
        </div>
        <div>
            <Button onClick={handleAddItemToCart}>Add to Cart</Button>
        </div>

        
      
    </Card>
  )
}

export default MenuCard
