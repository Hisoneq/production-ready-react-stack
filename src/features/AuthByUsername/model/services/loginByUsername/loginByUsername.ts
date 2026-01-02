import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LognByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LognByUsernameProps,
    { rejectValue: string; extra: ThunkExtraArg }
>('login/loginByUsername', async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
        const response = await extra.api.post<User>('/login', authData);

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Вы ввели неправильный логин или пароль');
    }
});
