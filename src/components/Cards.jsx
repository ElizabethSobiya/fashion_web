import React from 'react'
import {RiHeart3Fill} from 'react-icons/ri';
import Dress from '../assets/1.png'
import { useState, useEffect } from 'react';
// import Rating from './Rating'

function Cards() {
const [red, setRed] = useState('#FFFFFF');
const [posts, setPosts] = useState([]);

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


const heartClick = ()=> {
    setRed('#FF0000')
    console.log('red')
}

  return (
    <>
    <div className='grid grid-cols-4 gap-4 mt-[10%]'>
    {posts.map((user,id)  => (
         <div key={id}>
            <img src={user.dress} alt=""/>
            <RiHeart3Fill className=''  onClick={heartClick}/>
            <button className='hover:bg-[#6D84FF]' >View Products</button >
            <p>{user.brand_name}</p>
            <p>{user.price} <span>{user.offer_price}</span></p>
            <p><span>(200)</span></p>
            {/* <Rating/> */}   
        </div>
          ))}
        
        {/* <div>
            <img src={Dress} alt="" />
            <RiHeart3Fill/>
            <p>name</p>
            <p>price <span>offer price</span></p>
            <p></p>
        </div>
        <div>
            <img src={Dress} alt="" />
            <RiHeart3Fill/>
            <p>name</p>
            <p>price <span>offer price</span></p>
            <p></p>
        </div>
        <div>
            <img src={Dress} alt="" />
            <RiHeart3Fill/>
            <p>name</p>
            <p>price <span>offer price</span></p>
            <p></p>
        </div> */}
    </div>
    </>
  )
}

export default Cards