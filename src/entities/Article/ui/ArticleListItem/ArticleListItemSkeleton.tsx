import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = React.memo(
    ({ className, view }: ArticleListItemSkeletonProps) => {
        if (view === ArticleView.BIG) {
            return (
                <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                    <Card>
                        <div className={cls.header}>
                            <Skeleton border={'50%'} width={30} height={30} />
                            <Skeleton width={150} height={16} className={cls.username} />
                            <Skeleton width={150} height={16} className={cls.date} />
                        </div>
                        <Skeleton width={250} height={24} className={cls.title} />
                        <Skeleton height={200} className={cls.image} />
                        <div className={cls.footer}>
                            <Skeleton width={200} height={36} />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.imgWrapper}>
                        <Skeleton width={200} height={200} className={cls.img} />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} className={cls.title} />
                </Card>
            </div>
        );
    }
);
