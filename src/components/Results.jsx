import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Rating from './Rating'

function Results() {
  return (
   <>
   <div className='flex flex-col items-start m-[3%]  md:w-[15%] sm:w-[15%]'>
   <h1 className='text-black text-xl font-inter font-semibold'>Search Results</h1>
   <div className='leading-8'>
    <div className='flex flex-row'> 
    <h1 className='uppercase flex flex-row flex-start font-inter font-semibold md:text-sm sm:text-xs'>Brands</h1>
    <RiArrowDropDownLine className='flex-end'/>
    </div>
    
    <input type="checkbox" /><label className='md:text-sm sm:text-xs'>Mango</label>
    <br />
    <input type="checkbox" /><label className='md:text-sm sm:text-xs' >H & M</label>
   
   </div>
   <div className='leading-8 md:text-sm sm:text-xs'>
   <div className='flex flex-row'> 
   <h1 className='uppercase flex flex-row flex-start font-inter font-semibold md:text-sm sm:text-xs'>Price Range</h1>
   <RiArrowDropDownLine/>
   </div>
    
    <input type="checkbox" /><label className='md:text-sm sm:text-xs'>Under 500</label>
    <br />
    <input type="checkbox" /><label className='md:text-sm sm:text-xs' >1000-3000</label>
   
   </div>
   <div className='leading-8 md:text-sm sm:text-xs' >
   {/* <div className='flex flex-row'>
     <h1 className='uppercase flex flex-row flex-start font-inter font-semibold md:text-sm sm:text-xs'>Ratings</h1>
     <RiArrowDropDownLine/>
     </div>
   <div className='flex flex-col  md:text-sm sm:text-xs '>
   <input type="checkbox" /><label  className='md:text-sm sm:text-xs'>5 </label>
   
    <input type="checkbox" /><label className='md:text-sm sm:text-xs'>4 </label>
   
    <input type="checkbox" /><label className='md:text-sm sm:text-xs' >3 </label>
   
    <input type="checkbox" /><label  className='md:text-sm sm:text-xs'>2 </label>
  
    <input type="checkbox" /><label  className='md:text-sm sm:text-xs'>1 </label>
   </div> */}
   </div>
   </div>
   </>
  )
}

export default Results