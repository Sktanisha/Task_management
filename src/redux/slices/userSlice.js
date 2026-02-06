import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../../../firebase.config'

const initialState = {
  /* value: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null, */
  value: auth.currentUser ? auth.currentUser : null ,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      
      state.value = action.payload
    },
    removeUser: (state) => {
      
      state.value -= 1
    },

  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer