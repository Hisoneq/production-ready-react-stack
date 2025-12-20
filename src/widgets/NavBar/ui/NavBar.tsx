import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export function NavBar({ className }: NavbarProps){

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar , {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/" className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
}