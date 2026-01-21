import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, Avatar, Text } from 'shared/ui';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import type { Comment } from '../../model/types/comments';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = React.memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'} />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>

                <Skeleton className={cls.text} width={'100%'} height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>

            <Text description={comment.text} className={cls.text} />
        </div>
    );
});
