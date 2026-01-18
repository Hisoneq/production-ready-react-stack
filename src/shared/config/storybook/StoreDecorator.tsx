import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { newCommentReducers } from 'features/addNewComment/model/slice/addNewCommentSlice';
import { loginReducer } from 'features/AuthByUsername';
import { articleDetailsCommentsReducer } from 'pages/ArticlesDetailPage/model/slice/articleDetailsCommentsSlice';
import { ReducersList } from 'shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetail: articleDetailReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    addNewComment: newCommentReducers,
};

export interface StoreDecoratorOptions {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList;
}

export const StoreDecorator =
    ({ initialState, asyncReducers = {} }: StoreDecoratorOptions = {}) =>
    (StoryComponent: StoryFn) => (
        <StoreProvider
            initialState={initialState as StateSchema}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    );
