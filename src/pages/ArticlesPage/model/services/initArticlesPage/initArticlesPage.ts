import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesList';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    { rejectValue: string; extra: ThunkExtraArg; state: StateSchema }
>('articlesPage/initArticlesPage', async (_, { getState, dispatch }) => {
    const state = getState();

    const _inited = getArticlesPageInited(state);

    if (__PROJECT__ !== 'storybook' && !_inited) {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({ page: 1 }));
    }
});
