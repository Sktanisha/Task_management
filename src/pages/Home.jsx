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
<div className="min-h-screen bg-slate-50 py-10 px-4">
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Today’s Tasks
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Stay organized. Add tasks, mark completed, and track progress.
        </p>
      </div>

      {/* Quick Stats (UI only) */}
      <div className="flex gap-3">
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
          <p className="text-xs text-slate-500">Total</p>
          <p className="text-lg font-bold text-slate-900">8</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
          <p className="text-xs text-slate-500">Done</p>
          <p className="text-lg font-bold text-emerald-600">3</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
          <p className="text-xs text-slate-500">Pending</p>
          <p className="text-lg font-bold text-orange-600">5</p>
        </div>
      </div>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      {/* Left: Add Task */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
        <h3 className="text-lg font-semibold text-slate-900">Add a task</h3>
        <p className="text-sm text-slate-600 mt-1">
          Keep tasks short and clear.
        </p>

        <div className="mt-4 space-y-3">
          <div>
            <label className="text-xs font-medium text-slate-700">Task</label>
            <input
              type="text"
              placeholder="e.g. Submit documents, gym, study..."
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-700">Priority</label>
              <select className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-600">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700">Due</label>
              <input
                type="date"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 transition"
          >
            + Add Task
          </button>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Clear form
            </button>
            <button
              type="button"
              className="text-sm text-red-600 hover:text-red-700"
            >
              Delete completed
            </button>
          </div>
        </div>
      </div>

      {/* Right: Task List */}
      <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
        {/* Top controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full rounded-xl border border-slate-200 pl-10 pr-3 py-2.5 text-sm outline-none focus:border-blue-600"
              />
              <span className="absolute left-3 top-2.5 text-slate-400">🔎</span>
            </div>

            <select className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-600">
              <option>All</option>
              <option>Active</option>
              <option>Completed</option>
            </select>

            <select className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-600">
              <option>Sort: Newest</option>
              <option>Sort: Oldest</option>
              <option>Sort: Priority</option>
            </select>
          </div>

          {/* Progress bar (UI only) */}
          <div className="w-full md:w-64">
            <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
              <span>Progress</span>
              <span>3/8</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-[37%] bg-emerald-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* List */}
        <div className="mt-5 space-y-3">
          {/* Item */}
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 hover:shadow-sm transition">
            <input type="checkbox" className="mt-1 h-4 w-4" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-slate-900">Finish Firebase signup flow</p>
                <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700">
                  High
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-1">
                UpdateProfile + email verification + store username.
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                <span>📅 Due: Today</span>
                <span>•</span>
                <span>🕒 20 min</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50">
                Edit
              </button>
              <button className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-red-600">
                Delete
              </button>
            </div>
          </div>

          {/* Completed item */}
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 bg-slate-50">
            <input type="checkbox" defaultChecked className="mt-1 h-4 w-4" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-slate-500 line-through">
                  Create Reset Password page UI
                </p>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  Done
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1 line-through">
                Clean UI card + email input + link to sign in.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-white">
                Undo
              </button>
              <button className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-white text-red-600">
                Delete
              </button>
            </div>
          </div>

          {/* Another item */}
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 hover:shadow-sm transition">
            <input type="checkbox" className="mt-1 h-4 w-4" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-slate-900">Gym (Push day)</p>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                  Medium
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-1">
                45–60 min. Focus on form and finish strong.
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                <span>📅 Due: Tomorrow</span>
                <span>•</span>
                <span>🕒 60 min</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50">
                Edit
              </button>
              <button className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-slate-600">
          <p>Tip: keep daily tasks under 8 for better focus.</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
              Mark all done
            </button>
            <button className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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
