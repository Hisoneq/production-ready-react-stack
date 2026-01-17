import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from 'shared/ui';
import { useAppDispatch } from '../../../../../shared/lib/hooks/useAppDispatch';
import { getArticleCommentsIsLoading } from '../../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../../model/services/fetchCommentsByArticleId.ts/fetchCommentsByArticleId';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticlesDetailPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string;
}

export default function ArticlesDetailPage({ className }: ArticlesDetailPageProps) {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const { t } = useTranslation('article');

    const comments = useSelector(getArticleComments.selectAll);

    const isLoading = useSelector(getArticleCommentsIsLoading);

    const reducers: ReducersList = {
        articleDetailsComments: articleDetailsCommentsReducer,
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(id));
        }
    }, []);

    if (!id) {
        return (
            <div className={classNames(cls.articlesDetailPage, {}, [className])}>
                {t('Статья не найдена.')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} name="articleDetailsComments">
            <div className={classNames(cls.articlesDetailPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
}
