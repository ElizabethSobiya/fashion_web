import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Rating from './Rating'

function Results() {
  return (
   <>
   {/* result tab content */}
   <div className='flex flex-col items-start md:m-[2%] sm:m-[2%] md:p-[1%] sm:p-[1%]  md:w-[15%] sm:w-[15%]'>
   <p className='text-black md:text-lg sm:text-base font-inter font-semibold'>Search Results</p>
   <br />
   <div className='leading-8'>
    <div className='flex flex-row'> 
    {/* /search checkbox */}
    <h1 className='uppercase flex flex-row flex-start font-inter font-semibold md:text-sm sm:text-xs'>Brands</h1>
    <br />
    <RiArrowDropDownLine className='flex-end'/>
    </div>
    
   <div className='border-solid border-b-1 border-black-400'>
   <input type="checkbox" /><label className='md:text-sm sm:text-xs'>Mango</label>
    <br />
    <input type="checkbox" /><label className='md:text-sm sm:text-xs' >H & M</label>
   </div>
   
   </div>
   <div className='leading-8 md:text-sm sm:text-xs'>
   <div className='flex flex-row'> 
   <h1 className='uppercase flex flex-row flex-start font-inter font-semibold md:text-sm sm:text-xs'>Price Range</h1>
   <br />
   <RiArrowDropDownLine/>
   </div>
    <input type="checkbox" /><label className='md:text-sm sm:text-xs '>Under 500</label>
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