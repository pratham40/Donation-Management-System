import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";
const initialState={
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data:JSON.parse(localStorage.getItem('data')) || {}
}

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res=toast.promise(axiosInstance.post("user/register", data),{
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
        throw error;
    }
})

export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res = toast.promise(axiosInstance.post("user/login", data),{
            loading: "Wait! authentication in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to log in"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
        throw error;
    }
});

export const logout = createAsyncThunk("/auth/logout", async () => {
    try {
        const res=toast.promise(axiosInstance.get("user/logout"),{
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to log out"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
        throw error;
    }
})

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled,(state,action)=>{
            if(action?.payload?.user){
                localStorage.setItem('isLoggedIn',true);
                localStorage.setItem('data',JSON.stringify(action.payload.user));
                localStorage.setItem('role',action.payload.role);
                state.isLoggedIn=true;
                state.data=action.payload.user;
                state.role=action.payload.role;
            }
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.isLoggedIn=false;
            state.data={};
            state.role="";
        })
    }
})

export default authSlice.reducer