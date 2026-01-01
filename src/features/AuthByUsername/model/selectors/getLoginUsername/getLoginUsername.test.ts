import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLognUsername';

describe('getLoginUsername', () => {
    test('should return password value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123');
    });

    test('should return emty str', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: undefined,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
