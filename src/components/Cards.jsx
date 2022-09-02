import React from 'react'
import {RiHeart3Fill} from 'react-icons/ri';
import { useState, useEffect } from 'react';
import Rating from './Rating'

function Cards() {
const [color, setColor] = useState('white');
const [posts, setPosts] = useState([]);

/// fetch data from api

  const fetchPost = () => {
    fetch("https://demo8786099.mockable.io/clothes")
    .then(response => {
        return response.json()
    })
    .then(data => {
        setPosts(data)
    })
  };

  useEffect(() => {
    fetchPost();
  }, []);


  // color change onclick
const heartClick = (e)=> {
   if(color === 'white'){
       setColor('red')
   }else{
    setColor('white')
   }
    console.log('red')
}

  return (
    <>
    <div className='grid sm:grid-cols-2 md:grid-cols-4  gap-1 w-[85%] mt-[10%] '>
    {posts.map((user,id)  => (
         <div key={id} className='relative'>
            <img src={user.dress} alt=""  className='md:w-[70%] md:h-[65%] sm:w-[60%] sm:h-[55%]'/>
            {/* button on hover */}
            <button className='absolute bg-transparent md:bottom-[35%] sm:bottom-[45%] md:w-[70%] sm:w-[60%] text-transparent hover:text-white text-center hover:bg-violet-500' >View Products</button >
            {/* heart icons */}
            <RiHeart3Fill className='absolute md:top-[3%] md:right-[32%] sm:top-[3%] sm:right-[42%]' style={{color:color}} onClick={heartClick}/>
            {/* description of the product and price */}
            <p className='font-inter md:text-sm sm:text-xs font-medium'>{user.brand_name}</p>
           <div className='flex flex-row'>
           <p className='text-gray-500 line-through md:text-sm sm:text-xs '>Rs.{user.price} </p>
           <span className='text-blue-400 md:text-sm sm:text-xs '>Rs.{user.offer_price}</span>
           </div>
           <div className='flex flex-row'>
            {/* rating icons */}
             <Rating />  
             <span className='md:pl-5 sm:pl-4 '>(200)</span>
             </div>
        </div>
          ))}
    </div>
    </>
  )
}

export default Cards