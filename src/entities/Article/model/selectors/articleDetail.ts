import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleDetailData = (state: StateSchema) => state.articleDetail?.data;

export const getArticleDetailIsLoading = (state: StateSchema) => state.articleDetail?.isLoading;

export const getArticleDetailError = (state: StateSchema) => state.articleDetail?.error;
