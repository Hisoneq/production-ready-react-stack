import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import type { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    { rejectValue: string; extra: ThunkExtraArg }
>('articleDetails/fetchCommentsByArticleId', async (articleId, { extra, rejectWithValue }) => {
    if (!articleId) {
        return rejectWithValue('empty id');
    }

    try {
        const response = await extra.api.get<Comment[]>('/comments', {
            params: {
                articleId,
                _expand: 'user',
            },
        });
        console.log('Response data:', response.data);

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Ошибочка');
    }
});
