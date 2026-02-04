import React, { useState } from 'react'
import Banner from '../components/home/Banner'
import Category from '../components/home/Category'
import { Link } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import { addUser } from '../redux/slices/userSlice';

const Home = () => {

let user = useSelector((state)=> state.user.value)
let [name, setName]=useState('')
let dispatch = useDispatch()

let handleSubmit = ()=>{
  dispatch(addUser)
}

  return (
    <div>
      <Banner/>
      <Category/>
      <Link to='/about' className='text-black bg-amber-100 py-5 px-5 inline-block mt-4 rounded-lg'> About</Link>
      <h1> {user}</h1>
      <input onChange={(e)=> setName(e.target.value)} type='text' className='border-black'/>
      
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Home
