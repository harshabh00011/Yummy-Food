import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

const AdressCard = ({handleSelectAddress,item,showButton}) => {
    
  return (
    <Card className='flex space-x-5 lg:w-64 m-5 p-5'>
      <HomeIcon/>
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Home</h1>
        <p>12A08,Tower-2,Paras Seasons,Sec 168,Noida,Uttar Pradesh,India 201305</p>
      {showButton && (
        <Button
        variant="outlined"
        fullWidth
        onClick={()=>handleSelectAddress(item)}
        >
            select
            </Button>
      )}
      </div>
    </Card>
  )
}

export default AdressCard
