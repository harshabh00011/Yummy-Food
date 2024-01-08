import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCart = (item) => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg" alt="" />
            <div>
                <p>Pizza</p>
                <p className='text-gray-400'>₹399</p>
            </div>
        </div>
        <div>
            <Button variant='contained'>Track</Button>
        </div>
      
    </Card>
  )
}

export default OrderCart
