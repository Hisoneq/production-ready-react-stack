import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from 'shared/ui';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export function PageError({ className }: PageErrorProps) {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.pageerror, {}, [className])}>
            <p>{t('Ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
}
