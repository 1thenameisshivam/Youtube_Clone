import { createSlice } from "@reduxjs/toolkit";


const configSlice=createSlice({
    name:"config",
    initialState:{
        profileButton:false,
        menuButton:true,
    },
    reducers:{
        toggleProfile:(state,action)=>{
            state.profileButton=(!state.profileButton);
        },
        toggleMenu:(state,action)=>{
            state.menuButton=(!state.menuButton);
        },
        closeMenu:(state,action)=>{
            state.menuButton=false;
        },
        openMenu:(state,action)=>{
            state.menuButton=true;
        }
    }
})

export const {openMenu,closeMenu,toggleProfile,toggleMenu} =configSlice.actions;
export default configSlice.reducer;