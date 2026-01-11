import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ArticlesDetailPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string;
}

export default function ArticlesDetailPage({ className }: ArticlesDetailPageProps) {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.articlesDetailPage, {}, [className])}>
            {t('Articles detail')}
        </div>
    );
}
