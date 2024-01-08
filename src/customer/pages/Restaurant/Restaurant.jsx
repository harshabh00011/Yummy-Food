import { Card, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuCard from './MenuCard';


const categories=[
  "Thali",
  "Starters",
  "Indian Main Course",
  "Rice and Biryani",
  "Breads",
  "Accomplishments",
  "Dessert",
]

const foodType= ["Vegetarian Only", "Non-Vegetarian Only", "Both"];
const menu1=[1,1,1,1,1,1]

const Restaurant = () => {
  const[selectedCategory,setSelectedCategory]=useState();
  const[selectedFoodType,setSelectedFoodType]=useState();
  const handleFoodTypeChange=()=>{

    console.log("selected Food Type - ",selectedFoodType)

  }
  const handleCategoryChange=()=>{

    console.log("selected category - ",selectedCategory)

  }
  return (
    <div className='px-5 lg:px-2='>

      <section>
        <h3 className='text-gray-500 py-2 mt-10'>
          {'Home/India/Yummy Restaurant/2/Order Online'}
        </h3>
        <div>
          <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_1280.jpg" 
          alt="" />
        </div>
        <div>
          <h1 className='text-4xl py-1 font-semibold'>{'Yummy Restaurant'}
          </h1>
          <p className='text-gray-500'>
            Italian Pizza
          </p>
          <p className= 'py-3 text-red-300'>
            Open now 10:30am - 12 midnight (Today)
          </p>
        </div>
      </section>
      <Divider/>
      <section className='pt-[2rem] lg:flex relative'>
        <div className='space-y-10 lg:w-[20%]'>
          <Card className='p-5 space-y-5 lg:sticky top-28'>
            <div>
              <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                Category
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup name='category' value={selectedCategory} onChange={handleCategoryChange}>
                  {categories.map((item,index)=><FormControlLabel
                    key={index}
                    value={item}
                    control={<Radio/>}
                    label={item}
                    sx={{color:"gray"}}
                  />)}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
            <div>
              <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                Food Type
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup name='foodType' value={selectedFoodType} onChange={handleFoodTypeChange}>
                  {foodType.map((item,index)=><FormControlLabel
                    key={index}
                    value={item}
                    control={<Radio/>}
                    label={item}
                    sx={{color:"gray"}}
                  />)}
                </RadioGroup>
              </FormControl>
            </div>
          </Card>
        </div>
        <div className="lg:w-[80%] space-y-5 lg:pl-10">
          {menu1.map((item1)=><MenuCard item={item1}/>)}
          
        </div>
        
      </section>
    </div>
  )
}

export default Restaurant
