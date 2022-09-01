import React,{useState} from 'react'
// import axios from 'axios';
import Bg from '../assets/hanger.png'
import Logo from '../assets/logo.png'
import {RiSearchLine} from 'react-icons/ri'
import Gray from '../assets/1.png'
import White from '../assets/2.png'
import Red from '../assets/3.png'
import Yellow from '../assets/4.png'
import Black from '../assets/5.png'


// search bar in the homepage

function Main() {
  const [isShown, setIsShown] = useState(false);
  

  const handleClick = event => {
    //  toggle shown state
    setIsShown(current => !current);

    //  or simply set it to true
    // setIsShown(true);
  };

  return (
   <>
  <div className= "bg-[rgba(215, 224, 255, 0.26)]">
    <img src={Bg} alt=""className=' opacity-75 w-full h-[100vh] object-fit:contain' />
    <div className='flex justify-evenly'>
     <input type="text" placeholder='Search'
     onClick={handleClick}
     className='absolute w-[60%] h-[8%] border-none rounded-xl focus:outline-none left-[250px] pl-10 
     text-xl font-inter  top-[120px]'   />
    <RiSearchLine size={25} color ={'#9ca3af'} className ='absolute  right-[320px] top-[135px] '/>
    </div>
     <div>
        <img src={Logo} alt="" className='w-20 absolute right-5 top-4' />
     </div>
  </div>
  {/*  show elements on click */}
  {isShown && (
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
      )}

   </>
  )
}

export default Main
