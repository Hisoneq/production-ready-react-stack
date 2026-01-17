import { DeepPartial } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

describe('UserSlice', () => {
    test('set auth data test', () => {
        const state: DeepPartial<UserSchema> = {
            authData: {
                id: '1',
                username: 'test',
            },
        };
        expect(
            userReducer(
                state as UserSchema,
                userActions.setAuthData({
                    id: '2',
                    username: 'loh',
                })
            )
        ).toEqual({
            authData: {
                id: '2',
                username: 'loh',
            },
        });
    });

    test('init auth data', () => {
        const mockUser = { id: '3', username: 'inited' };
        Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUser));

        const state: DeepPartial<UserSchema> = {};

        expect(userReducer(state as UserSchema, userActions.initAuthData())).toEqual({
            _inited: true,
            authData: mockUser,
        });
    });

    test('logout', () => {
        Storage.prototype.removeItem = jest.fn();

        const state: DeepPartial<UserSchema> = {
            authData: {
                id: '1',
                username: 'test',
            },
        };

        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
            authData: undefined,
        });
    });
});
