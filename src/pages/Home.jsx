import React, { useState } from 'react'
import Banner from '../components/home/Banner'
import Category from '../components/home/Category'
import { Link } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';


const Home = () => {

 /* let user = useSelector((state)=> state.user.value)
 let [name, setName]=useState('') */
let user = JSON.parse(localStorage.getItem("user"))

let handleSubmit = ()=>{
  
}

  return (
    <div>
     <h1>Name {user?.displayName}</h1>
      <input onChange={(e)=> setName(e.target.value)} type='text' className='border-black'/>
      
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Home
