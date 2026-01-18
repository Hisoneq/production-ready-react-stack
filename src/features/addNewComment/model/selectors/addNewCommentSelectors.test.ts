import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAddNewCommentError, getAddNewCommentText } from './addNewCommentSelectors';

describe('getNewComment', () => {
    test('getNewCommentText', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                text: '',
                error: undefined,
            },
        };
        expect(getAddNewCommentText(state as StateSchema)).toEqual('');
    });

    test('getNewCommentError', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                text: '',
                error: undefined,
            },
        };
        expect(getAddNewCommentError(state as StateSchema)).toEqual(undefined);
    });
});
