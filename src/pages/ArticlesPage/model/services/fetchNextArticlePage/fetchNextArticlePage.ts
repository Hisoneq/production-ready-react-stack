import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesList';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    { rejectValue: string; extra: ThunkExtraArg; state: StateSchema }
>('articlesPage/fetchNextArticlePage', async (_, { getState, dispatch }) => {
    const state = getState();

    const hasMore = getArticlesPageHasMore(state);
    const page = getArticlesPageNum(state);
    const isLoading = getArticlesPageIsLoading(state);

    if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1));
        dispatch(fetchArticlesList({ page: page + 1 }));
    }
});
