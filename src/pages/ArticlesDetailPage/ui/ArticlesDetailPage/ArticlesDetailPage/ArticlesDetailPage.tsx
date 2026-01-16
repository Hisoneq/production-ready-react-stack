import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ArticlesDetailPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string;
}

export default function ArticlesDetailPage({ className }: ArticlesDetailPageProps) {
    const { id } = useParams<{ id: string }>();

    const { t } = useTranslation('article');

    if (!id) {
        return (
            <div className={classNames(cls.articlesDetailPage, {}, [className])}>
                {t('Статья не найдена.')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.articlesDetailPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
}
