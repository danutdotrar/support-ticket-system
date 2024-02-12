// we need createSlice and createAsyncThunk from redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from "../notes/noteService";

// Create initial state
const initialState = {
    user: "",
    ticket: "",
    text: "",
};

// Create new note
export const createNote = createAsyncThunk(
    "notes/create",
    async (noteData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await noteService.createNote(noteData, token);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);
