import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
    test('should return user value', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'temp',
                },
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({
            id: '1',
            username: 'temp',
        });
    });

    test('should return empty obj', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {},
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({});
    });
});
