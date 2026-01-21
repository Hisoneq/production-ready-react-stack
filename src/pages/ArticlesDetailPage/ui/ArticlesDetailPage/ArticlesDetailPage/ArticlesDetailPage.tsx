import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddNewComment } from 'features/addNewComment';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme, Text } from 'shared/ui';
import { Page } from 'shared/ui/Page/Page';
import { getArticleCommentsIsLoading } from '../../../model/selectors/comments';
import { addCommentForArticle } from '../../../model/services/addCommentForArticle/addCommentForArticle';
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
    const navigate = useNavigate();

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
            <Page className={classNames(cls.articlesDetailPage, {}, [className])}>
                {t('Статья не найдена.')}
            </Page>
        );
    }

    const handelSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, []);

    const onBackToArticles = useCallback(() => {
        navigate(RoutePath.article);
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} name="articleDetailsComments">
            <Page className={classNames(cls.articlesDetailPage, {}, [className])}>
                <Button onClick={onBackToArticles} theme={ButtonTheme.OUTLINE}>
                    {t('Назад к статьям')}
                </Button>
                <ArticleDetails id={id} />
                <AddNewComment handelSendComment={handelSendComment} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
}
