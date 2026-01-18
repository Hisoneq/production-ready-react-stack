import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { Profile } from '../../types/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string | undefined,
    { rejectValue: string; extra: ThunkExtraArg }
>('profile/fetchProfileData', async (profileId, { extra, rejectWithValue }) => {
    if (!profileId) {
        return rejectWithValue('Не указан id');
    }

    try {
        const response = await extra.api.get<Profile>(`/profile/${profileId}`);
        console.log('Response data:', response.data);

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Ошибочка');
    }
});
