import React from 'react'
import Gray from '../assets/1.png'
import White from '../assets/2.png'
import Red from '../assets/3.png'
import Yellow from '../assets/4.png'
import Black from '../assets/5.png'

function Latest() {
  return (
   <>
   <div className='w-[65%] h-[65%] font-inter bg-white border-none  absolute flex flex-col j p-5  right-[19%] top-[30%]'>
        <h1 className='font-bold pb-4 '>Latest Trends</h1>
        
        <div className='grid grid-cols-5  text-sm font-light text-black h-[55%] m-0 '>
        <div>
          <img src={Gray} alt="Shirt" className=' w-[75%] h-[70%]' />
          <p className= ' font-inter opacity-75 text-xs pt-1'>Shirt with Puffed sleeves</p>
        </div>
        <div>
          <img src={White} alt="jumpsuit"  className='w-[75%] h-[70%]'/>
          <p className= ' font-inter opacity-75 text-xs pt-1'>Linen jumpsuit</p>
        </div>
        <div>
          <img src={Red} alt="formal"  className='w-[75%] h-[70%]'/>
          <p className= ' font-inter opacity-75 text-xs pt-1'>White formal suit</p>
        </div>
        <div>
          <img src={Yellow} alt="Pattern" className='w-[75%] h-[70%]' />
          <p className= ' font-inter opacity-75 text-xs pt-1'>Pattern dresses</p>
        </div>
        <div>
          <img src={Black} alt="Leather"  className='w-[75%] h-[70%]'/>
          <p className= ' font-inter opacity-75 text-xs pt-1'>Leather shirt dress</p>
        </div>
        </div>
         
          <div className='flex flex-col h-full '>
            <h1 className='font-bold pl-1'>Popular Suggestions</h1>
            <ul className='font-normal text-xs p-1'>
              <li>Striped shirt dress</li>
              <li>Satin shirts</li>
              <li>Denim Jumpsuit</li>
              <li>Leather dresses</li>
              <li>Solid shirts</li>
            </ul>
          </div>
        </div>
   </>
  )
}

export default Latest
