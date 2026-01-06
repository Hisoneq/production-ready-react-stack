import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { Profile } from '../../types/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    { rejectValue: string; extra: ThunkExtraArg }
>('profile/fetchProfileData', async (_, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<Profile>('/profile');
        console.log('Response data:', response.data);

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Ошибочка');
    }
});
