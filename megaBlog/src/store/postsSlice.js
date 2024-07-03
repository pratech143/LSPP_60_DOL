import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        updatePost: (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.posts.find(post => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
        deletePost: (state, action) => {
            const { id } = action.payload;
            state.posts = state.posts.filter(post => post.id !== id);
        },
        fetchPostsStart: (state) => {
            state.status = 'loading';
        },
        fetchPostsSuccess: (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        },
        fetchPostsFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
})

export const { addPost, updatePost, deletePost, fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;

export default postsSlice.reducer;
