import React, { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser } from "../redux/slices/userSlice";
import toast from "react-hot-toast";

const Home = () => {
  let user = useSelector((state) => state.user.value);
  let navigate = useNavigate();
  /*let [name, setName]=useState('') */
  /* let user = JSON.parse(localStorage.getItem("user")) */
  let data = auth;
  let dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if(user.emailVerified){
          dispatch(addUser(user));
        }else{
          toast.error("please verify your email")
          navigate("/signin");
        }
      } else {
        navigate("/signin");
      }
    });
  }, []);

  /* if(!auth.currentUser){
    setTimeout(()=>{
      navigate("/signin")
    },2000);
    
  } */

  /* useEffect(()=>{
  if(!user){
    setTimeout(()=>{
      navigate("/signin")
    },2000);
    
  }
}) */

  let handleSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully")
        navigate("/signin")
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };

  return (
    <div>
      <h1>Name {user?.displayName}</h1>
      <button
        onClick={handleSignout}
        className="cursor-pointer bg-amber-100 ml-1 mt-1 px-3 py-2 rounded-lg border-2"
      >
        Signout
      </button>
      {/* <input onChange={(e)=> setName(e.target.value)} type='text' className='border-black'/>
      
      <button onClick={handleSubmit}>submit</button> */}
    </div>
  );
};

export default Home;
