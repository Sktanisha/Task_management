import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state) => {
      
      state.value += 1
    },

  },
})

// Action creators are generated for each case reducer function
export const { addUsert } = userSlice.actions

export default userSlice.reducer