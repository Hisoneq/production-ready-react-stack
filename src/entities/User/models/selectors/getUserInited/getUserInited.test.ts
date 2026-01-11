import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from './getUserInited';

describe('getUserInited', () => {
    test('should return user value', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: false,
            },
        };
        expect(getUserInited(state as StateSchema)).toEqual(false);
    });

    test('should return empty obj', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        };
        expect(getUserInited(state as StateSchema)).toEqual(undefined);
    });
});
