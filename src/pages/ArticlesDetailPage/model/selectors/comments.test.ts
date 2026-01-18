import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

describe('getProfileData', () => {
    test('getArticleCommentsError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: false,
                ids: [],
                entities: {},
                error: undefined,
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
    });

    test('getArticleCommentsIsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: false,
                ids: [],
                entities: {},
                error: undefined,
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false);
    });
});
