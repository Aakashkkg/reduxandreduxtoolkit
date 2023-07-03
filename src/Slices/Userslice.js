import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
  name: "userData",
  initialState: [],
  reducers: {
    adduser(state, action) {
      state.push(action.payload);
    },

    deluser(state, action) {
      console.log(action.payload)
      state.splice(action.payload, 1);
    },

    delalluser(state, action) {
      return [];
    },
  },
});

export { Userslice };

export const { adduser, deluser, delalluser } = Userslice.actions;
