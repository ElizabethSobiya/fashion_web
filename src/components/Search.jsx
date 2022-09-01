import React, {useEffect, useState} from 'react'
// import Logo from '../assets/logo.png'
import {RiSearchLine} from 'react-icons/ri'

function Search() {

    const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
      "https://demo8786099.mockable.io/clothes"
    );
   const value = await response.json();
    setPosts(value);
    console.log(value.products[dress])
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
   <>
    <div className= "bg-[rgba(215, 224, 255, 0.26)] w-full h-full">
    {/* <img src={Logo} alt=""className=' opacity-75 w-full h-[100vh] object-fit:contain' /> */}
    <div className='flex justify-evenly'>
     <input type="text" placeholder='Search'
     
     className='absolute w-[60%] h-[8%] border-none rounded-xl focus:outline-none left-[250px] pl-10 
     text-xl font-inter  top-[120px]'   />
    <RiSearchLine size={25} color ={'#9ca3af'} className ='absolute  right-[320px] top-[135px] '/>
    </div>
    </div>
    <div>
			<h1>Cool app</h1>
			
						
			
		</div>
   </>
  )
}

export default Search
