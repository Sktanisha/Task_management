import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: " ",
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