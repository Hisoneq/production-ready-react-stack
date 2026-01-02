import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/Profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: null,
    data: null,
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = ProfileSlice;

export const { reducer: profileReducer } = ProfileSlice;
