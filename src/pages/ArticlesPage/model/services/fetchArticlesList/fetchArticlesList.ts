import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimt } from '../../selectors/articlesList';

interface FetchArticlesListProps {
    page: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    { rejectValue: string; extra: ThunkExtraArg }
>('articlesPage/fetchArticlesList', async (props, { extra, rejectWithValue, getState }) => {
    const state = getState() as StateSchema;

    const { page = 1 } = props;
    const limit = getArticlesPageLimt(state);

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _page: page,
                _expand: 'user',
                _limit: limit,
            },
        });

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Ошибочка');
    }
});
