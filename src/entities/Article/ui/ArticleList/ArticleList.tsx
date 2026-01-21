import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const generateSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.BIG ? 3 : 9)
        .fill(0)
        .map((_, index) => (
            <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
        ));
};

export const ArticleList = React.memo(
    ({ className, articles, isLoading, view = ArticleView.BIG }: ArticleListProps) => {
        const renderArticle = (article: Article) => {
            return (
                <ArticleListItem
                    key={article.id}
                    article={article}
                    view={view}
                    className={cls.card}
                />
            );
        };

        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                {articles.length > 0 ? articles.map(renderArticle) : null}
                {isLoading && generateSkeletons(view)}
            </div>
        );
    }
);
