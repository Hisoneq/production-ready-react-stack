import { DeepPartial } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/Profile';
import { profileActions, profileReducer } from './ProfileSlice';

describe('ProfileSlice', () => {
    test('readonly toggle', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
            isLoading: false,
            error: undefined,
            data: undefined,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({
            readonly: false,
            isLoading: false,
            error: undefined,
            data: undefined,
        });
    });

    test('update data', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
            isLoading: false,
            error: undefined,
            data: undefined,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateData({
                    lastname: 'asd',
                    username: 'hisone',
                })
            )
        ).toEqual({
            readonly: true,
            isLoading: false,
            error: undefined,
            data: undefined,
            form: {
                lastname: 'asd',
                username: 'hisone',
            },
        });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            isLoading: false,
            error: undefined,
            data: {
                lastname: 'asd',
                username: 'hisone',
            },
            form: undefined,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            isLoading: false,
            error: undefined,
            data: {
                lastname: 'asd',
                username: 'hisone',
            },
            form: {
                lastname: 'asd',
                username: 'hisone',
            },
        });
    });
});
