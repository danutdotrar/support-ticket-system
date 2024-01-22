import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create initial state
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Register user, use async data with createAsyncThunk
export const register = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
        console.log(user);
    }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    console.log(user);
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

export default authSlice.reducer;
