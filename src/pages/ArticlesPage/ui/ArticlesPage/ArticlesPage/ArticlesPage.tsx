import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

export default function ArticlesPage({ className }: ArticlesPageProps) {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>{t('Страницы поста')}</div>
    );
}
