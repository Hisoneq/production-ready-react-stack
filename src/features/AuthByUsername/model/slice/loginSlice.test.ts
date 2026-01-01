import { DeepPartial } from '@reduxjs/toolkit';
import type { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('LoginSlice', () => {
    test('should return correct username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
            password: '',
            isLoading: true,
            error: '',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('Pidor'))).toEqual({
            username: 'Pidor',
            password: '',
            isLoading: true,
            error: '',
        });
    });

    test('should return correct password', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
            password: '',
            isLoading: true,
            error: '',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('Pidor'))).toEqual({
            username: '',
            password: 'Pidor',
            isLoading: true,
            error: '',
        });
    });
});
