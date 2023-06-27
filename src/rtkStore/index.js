import { configureStore } from "@reduxjs/toolkit";
import { Userslice } from "../Slices/Userslice";


const store  = configureStore({
    reducer:{
        userdata:Userslice.reducer,
    }
})


export default store;