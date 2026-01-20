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
        .map((index) => <ArticleListItemSkeleton view={view} key={index} className={cls.card} />);
};

export const ArticleList = React.memo(
    ({ className, articles, isLoading, view = ArticleView.BIG }: ArticleListProps) => {
        const contentKey = isLoading ? 'skeletons' : `articles-${articles.length}`;

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
            <div
                key={contentKey}
                className={classNames(cls.articleList, {}, [className, cls[view]])}
            >
                {isLoading
                    ? generateSkeletons(view)
                    : articles.length > 0
                      ? articles.map(renderArticle)
                      : null}
            </div>
        );
    }
);
