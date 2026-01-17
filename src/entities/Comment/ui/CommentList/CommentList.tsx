import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text } from '../../../../shared/ui';
import { Comment } from '../../model/types/comments';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = React.memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length ? (
                comments?.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.card}
                        key={comment.id}
                        comment={comment}
                    />
                ))
            ) : (
                <Text description={t('Комментарии отсутствуют')} />
            )}
        </div>
    );
});
