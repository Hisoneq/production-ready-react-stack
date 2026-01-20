import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { VIEW_LOCALSTIRAGE_KEY } from '../../../../shared/const/localstorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlePageSchema } from '../types/articlePageSchema';

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState()
);

const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState: articleAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        ids: [],
        entities: {},
        error: undefined,
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(VIEW_LOCALSTIRAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(VIEW_LOCALSTIRAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articleAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageReducer } = articlePageSlice;

export const { actions: articlePageActions } = articlePageSlice;
