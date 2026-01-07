import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { Profile } from '../../types/Profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    { rejectValue: string; extra: ThunkExtraArg; state: StateSchema }
>('profile/updateProfileData', async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileFormData(getState());

    try {
        const response = await extra.api.put<Profile>('/profile', formData);
        console.log('Response data:', response.data);

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Ошибочка');
    }
});
