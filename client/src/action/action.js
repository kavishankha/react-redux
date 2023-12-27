import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

const apiUrl = 'http://localhost:5000/api/names';

export const fetchPosts = createAsyncThunk('user/fetchPosts ', () => {
    return axios
        .get(apiUrl)
        .then(response => response.data)
})


export const addPost = createAsyncThunk('user/addPost ', (newPost) => {
    return axios
        .post(apiUrl, newPost)
        .then(response => response.data)
})
export const updatePost = createAsyncThunk('posts/updatePost', (updatedPost) => {
    return axios
        .put(`${apiUrl}/${updatedPost.id}`, updatedPost)
        .then(response => response.data)
});


export const deletePost = createAsyncThunk('posts/deletePost', async (postId, {rejectWithValue}) => {
    try {
        await axios.delete(`${apiUrl}/${postId}`);
        return postId;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
