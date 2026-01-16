import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import type { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    { rejectValue: string; extra: ThunkExtraArg }
>('article/fetchArticleById', async (articleId, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<Article>(`/articles/${articleId}`);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Ошибочка');
    }
});
