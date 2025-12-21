import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export function NotFoundPage({ className }: NotFoundPageProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.notfoundpage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
}
