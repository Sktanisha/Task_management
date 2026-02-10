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
return (
  <div className="min-h-screen bg-slate-50 p-4">
    <div className="max-w-3xl mx-auto">
      {/* Top Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
        <div>
          <p className="text-xs text-slate-500">Welcome</p>
          <h1 className="text-lg font-semibold text-slate-900">
            {user?.displayName || "User"}
          </h1>
        </div>

        <button
          onClick={handleSignout}
          className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
        >
          Logout
        </button>
      </div>

      {/* Todo Box */}
      <div className="mt-6 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">To-Do List</h2>
        <p className="text-sm text-slate-600 mt-1">
          Keep it simple — add tasks and stay focused.
        </p>

        {/* Add Task */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Write a new task..."
            className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
          />
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Add
          </button>
        </div>

        {/* Task List (UI Only) */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4" />
              <p className="text-sm text-slate-900">Finish Firebase signup</p>
            </div>
            <button className="text-sm text-red-600 hover:underline">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 bg-slate-50">
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="h-4 w-4" />
              <p className="text-sm text-slate-500 line-through">
                Reset password page UI
              </p>
            </div>
            <button className="text-sm text-red-600 hover:underline">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4" />
              <p className="text-sm text-slate-900">Gym (Push day)</p>
            </div>
            <button className="text-sm text-red-600 hover:underline">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);


      {/*
      <h1>Name {user?.displayName}</h1>
      <button
        onClick={handleSignout}
        className="cursor-pointer bg-amber-100 ml-1 mt-1 px-3 py-2 rounded-lg border-2"
      >
        Signout
      </button>
       <input onChange={(e)=> setName(e.target.value)} type='text' className='border-black'/>
      
      <button onClick={handleSubmit}>submit</button> */}
    </div>
  );
};

export default Home;
