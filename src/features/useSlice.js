import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null,
    },
    reducers :{
        login: ( state, actiion) =>{
            state.user = actiion.payload;
        },
        logout : (state) =>{
            state.user = null;
        },
    },
});

export const {login , logout} = userSlice.actions;


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;