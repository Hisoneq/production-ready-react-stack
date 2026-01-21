import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Avatar, Button, ButtonTheme, Text } from 'shared/ui';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig';
import {
    Article,
    ArticleBlockTypes,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComp } from '../ArticleTextBlockComp/ArticleTextBlockComp/ArticleTextBlockComp';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = React.memo(({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const types = <Text description={article.type.join(',')} className={cls.types} />;
    const views = (
        <>
            <Text description={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id]);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockTypes.TEXT
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text description={article.user.username} className={cls.username} />
                        <Text description={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={cls.image} />
                    {textBlock && (
                        <ArticleTextBlockComp block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imgWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text description={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text description={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
