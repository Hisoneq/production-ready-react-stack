import { lazy } from 'react';

const ArticlePageAsync = lazy(() => import('./ArticlePage'));

export default ArticlePageAsync;
