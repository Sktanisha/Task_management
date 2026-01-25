import React from 'react'
import Banner from '../components/home/Banner'
import Category from '../components/home/Category'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Link to='/about' className='text-black bg-amber-100 py-5 px-5 inline-block mt-4 rounded-lg'> About</Link>
    </div>
  )
}

export default Home
