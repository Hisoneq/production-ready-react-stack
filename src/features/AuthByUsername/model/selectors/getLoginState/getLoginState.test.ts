import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginPassword', () => {
    test('should return same value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: true,
                error: '',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: '',
            password: '',
            isLoading: true,
            error: '',
        });
    });
});
