import { ArticleList, ArticleView, ArtilceViewSelectors } from 'entities/Article';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import {
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../../model/selectors/articlesList';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    articlePageActions,
    articlePageReducer,
    getArticles,
} from '../../model/slice/articlePageSlice';
import cls from './ArticlePage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

export default function ArticlesPage({ className }: ArticlesPageProps) {
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const articles = useSelector(getArticles.selectAll);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);
    const _inited = useSelector(getArticlesPageInited);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initArticlesPage());
    }, []);

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [page, hasMore, isLoading]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount={false} name="articlePage">
            <Page
                onScrollEnd={onLoadNextPage}
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArtilceViewSelectors view={view} onViewClick={onChangeView} />
                <ArticleList articles={articles} isLoading={isLoading} view={view} />
            </Page>
        </DynamicModuleLoader>
    );
}
