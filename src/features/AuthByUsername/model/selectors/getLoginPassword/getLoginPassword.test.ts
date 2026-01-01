import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return password value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });

    test('should return emty str', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: undefined,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
