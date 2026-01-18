import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { getArticleDetailData } from 'entities/Article/model/selectors/articleDetail';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId.ts/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    { rejectValue: string; extra: ThunkExtraArg; state: StateSchema }
>('pages/addCommentForArticle', async (text, { extra, rejectWithValue, dispatch, getState }) => {
    const userData = getUserAuthData(getState());
    const article = getArticleDetailData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('no data or unauthorized');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Вы ввели неправильный логин или пароль');
    }
});
