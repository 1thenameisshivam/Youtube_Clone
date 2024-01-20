import { createSlice } from "@reduxjs/toolkit";


const vediosSlice = createSlice({
    name:"vedio",
    initialState:{
        loadVedios:[],
        searchName:null,
    },
    reducers:{
        addLoadVedios:(state,action)=>{
            state.loadVedios=[...state.loadVedios , ...action.payload]
        },
        addSearchName:(state,action)=>{
            state.searchName=action.payload;
        }
    }
})

export const {addLoadVedios,addSearchName} =vediosSlice.actions;
export default vediosSlice.reducer;