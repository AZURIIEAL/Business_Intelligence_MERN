import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    mode:"dark"
};

export const globalSlice=createSlice({ //function to toggle betwwen dark and light mode.
    name:"global",
    initialState:initialstate,
    reducers:{
        setMode:(state)=>{
            state.mode=state.mode==="light"?"dark":"light";
        }
    }

});
export const {setMode}=globalSlice.actions;
export default globalSlice.reducer;
