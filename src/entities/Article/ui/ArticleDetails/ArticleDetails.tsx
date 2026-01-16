import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar, Text } from 'shared/ui';
import { Sketeton } from 'shared/ui/Sketeton/Sketeton';
import { TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Icon } from '../../../../shared/ui/Icon/Icon';
import {
    getArticleDetailData,
    getArticleDetailError,
    getArticleDetailIsLoading,
} from '../../model/selectors/articleDetail';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailReducer } from '../../model/slice/articleDetailSlice';
import { ArticleBlock, ArticleBlockTypes } from '../../model/types/article';
import { ArticleCodeBlockComp } from '../ArticleCodeBlockComp/ArticleCodeBlockComp/ArticleCodeBlockComp';
import { ArticleImageBlockComp } from '../ArticleImageBlockComp/ArticleImageBlockComp/ArticleImageBlockComp';
import { ArticleTextBlockComp } from '../ArticleTextBlockComp/ArticleTextBlockComp/ArticleTextBlockComp';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetail: articleDetailReducer,
};

export const ArticleDetails = React.memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();

    const renderBlocks = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockTypes.CODE:
                return <ArticleCodeBlockComp key={block.id} block={block} className={cls.block} />;
            case ArticleBlockTypes.IMAGE:
                return <ArticleImageBlockComp key={block.id} block={block} className={cls.block} />;
            case ArticleBlockTypes.TEXT:
                return <ArticleTextBlockComp key={block.id} className={cls.block} block={block} />;
            default:
                return null;
        }
    }, []);

    const { t } = useTranslation('article');

    const isLoading = useSelector(getArticleDetailIsLoading);
    const error = useSelector(getArticleDetailError);
    const article = useSelector(getArticleDetailData);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Sketeton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Sketeton className={cls.title} width={300} height={32} />
                <Sketeton className={cls.skeleton} width={600} height={32} />
                <Sketeton className={cls.skeleton} width={'100%'} height={200} />
                <Sketeton className={cls.skeleton} width={'100%'} height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                title={t('Ошибка при загрузке статьи.')}
                align={TextAlign.CENTER}
                size={TextSize.L}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text title={article?.title} description={article?.subtitle} />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text description={String(article?.views)} />
                </div>

                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text description={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlocks)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} name="articleDetail">
            <div className={classNames(cls.articleDetails, {}, [className])}>{content}</div>
        </DynamicModuleLoader>
    );
});
