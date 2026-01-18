import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AddNewCommentSchema } from '../types/addNewComment';

const initialState: AddNewCommentSchema = {
    text: '',
    error: undefined,
};

export const AddNewCommentSlice = createSlice({
    name: 'newComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: newCommentActions } = AddNewCommentSlice;

export const { reducer: newCommentReducers } = AddNewCommentSlice;
