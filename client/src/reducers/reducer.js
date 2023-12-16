import { addPost, fetchPosts, updatePost, deletePost } from "../action/action";
import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    loading: false,
    users: [], // Corrected property name from "data" to "users"
    error: null,
    reducers: {},
}

const nameList = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, state => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = null;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const index = state.users.findIndex((post) => post.id === action.payload.id); // Corrected property name from "data" to "users"
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.users = state.users.filter((post) => post.id !== action.payload); // Corrected property name from "data" to "users"
            });
    }
});

export default nameList.reducer;

