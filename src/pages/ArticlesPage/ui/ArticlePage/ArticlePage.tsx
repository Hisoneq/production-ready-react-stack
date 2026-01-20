import { ArticleList, ArticleView, ArtilceViewSelectors } from 'entities/Article';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesList';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
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

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticlesList());
            dispatch(articlePageActions.initState());
        }
    }, []);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} name="articlePage">
            <div className={classNames(cls.articlesPage, {}, [className])}>
                <ArtilceViewSelectors view={view} onViewClick={onChangeView} />
                <ArticleList articles={articles} isLoading={isLoading} view={view} />
            </div>
        </DynamicModuleLoader>
    );
}
