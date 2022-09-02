import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'

function Results() {
  return (
   <>
   <div className='flex flex-col items-start mt-[5%] pl-4 pt-3 w-[20%]'>
   <h1 className='text-black text-3xl font-inter font-semibold'>Search Results</h1>
   <div className='leading-8'>
    <div className='flex flex-row'> 
    <h1 className='uppercase flex flex-row flex-start font-inter font-bold text-sm'>Brands</h1>
    <RiArrowDropDownLine className='flex-end'/>
    </div>
    
    <input type="checkbox" /><label for="checkbox">Mango</label>
    <br />
    <input type="checkbox" /><label for="checkbox">H & M</label>
   
   </div>
   <div className='leading-8'>
   <div className='flex flex-row'> 
   <h1 className='uppercase flex flex-row flex-start font-inter font-bold text-sm'>Price Range</h1>
   <RiArrowDropDownLine/>
   </div>
    
    <input type="checkbox" /><label for="checkbox">Under 500</label>
    <br />
    <input type="checkbox" /><label for="checkbox">1000-3000</label>
   
   </div>
   <div className='leading-8'>
   <div className='flex flex-row'>
     <h1 className='uppercase flex flex-row flex-start font-inter font-bold text-sm'>Ratings</h1>
     <RiArrowDropDownLine/>
     </div>
    <input type="checkbox" /><label for="checkbox">5</label>
    <br />
    <input type="checkbox" /><label for="checkbox">4</label>
    <br />
    <input type="checkbox" /><label for="checkbox">3</label>
    <br />
    <input type="checkbox" /><label for="checkbox">2</label>
    <br />
    <input type="checkbox" /><label for="checkbox">1</label>

   </div>
   </div>
   </>
  )
}

export default Results