import { getArticleDetailData } from './model/selectors/articleDetail';
import { articleDetailReducer } from './model/slice/articleDetailSlice';
import { ArticleView, type Article } from './model/types/article';
import type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { ArticleList } from './ui/ArticleList/ArticleList';
import { ArtilceViewSelectors } from './ui/ArtilceViewSelectors/ArtilceViewSelectors';

export {
    Article,
    articleDetailReducer,
    ArticleDetails,
    ArticleDetailsSchema,
    ArticleList,
    ArticleView,
    ArtilceViewSelectors,
    getArticleDetailData,
};
