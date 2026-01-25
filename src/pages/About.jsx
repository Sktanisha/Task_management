import React, { useEffect } from 'react'
import { Link, useNavigate} from 'react-router'

const About = () => {
  /* let navigate=useNavigate();
  useEffect(()=>{
    navigate("/")
  },[]) */
  return (
    <div>
      <Link to='/about' className='text-black bg-amber-100 py-5 px-5 inline-block mt-4 rounded-lg'> About</Link>
    </div>
  )
}

export default About
