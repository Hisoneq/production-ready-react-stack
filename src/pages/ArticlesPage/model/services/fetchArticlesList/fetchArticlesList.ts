import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    { rejectValue: string; extra: ThunkExtraArg }
>('articlesPage/fetchArticlesList', async (_, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
            },
        });

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Ошибочка');
    }
});
