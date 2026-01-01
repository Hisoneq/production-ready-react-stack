import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });

    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: undefined,
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('');
    });
});
