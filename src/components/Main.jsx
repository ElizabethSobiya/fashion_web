import React,{useState} from 'react'
import Bg from '../assets/hanger.png'
import Logo from '../assets/logo.png'
import {RiSearchLine} from 'react-icons/ri'

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
  {/* 👇️ show elements on click */}
  {isShown && (
        <div>
          <h1>Latest Trends</h1>
          <div>
            <img src="" alt="" />
            <p>  
            </p>
          </div>
          <div>
            <h1>Popular Suggestions</h1>
            <ul>
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
