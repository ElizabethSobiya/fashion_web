import React, {useEffect, useState} from 'react'
import Logo from '../assets/logo.png'
import {RiSearchLine} from 'react-icons/ri'
import Results from './Results';
import Cards from './Cards'

function Search() {

    
  return (
   <>
   {/* whole search side content and page rendering */}
    <div className= "w-full h-[5%] bg-white">
    <img src={Logo} alt="" className='w-[5%] absolute right-4 top-4'  />
    <div className='w-full mt-10'>
     <input type="text" placeholder='Search'
     className='absolute w-[40%] h-[8.5%] border-2 rounded-xl focus:outline-none left-[25%] pl-10 mt-6
     text-xl font-inter  top-[10px]'   />
    <RiSearchLine size={25} color ={'#9ca3af'} className ='absolute  right-[37%] top-[8%]'/>
    </div>
    </div>
    <div  className='flex flex-row'>
      <Results/>
      <Cards/>
		</div>
   </>
  )
}

export default Search
