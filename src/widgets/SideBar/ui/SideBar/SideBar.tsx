import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutLogo from 'shared/assets/icons/AboutUsLogo.svg';
import MainLogo from 'shared/assets/icons/mainLogo.svg';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, Button, ButtonTheme } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export function SideBar({ className }: SideBarProps) {
    const [isOpen, setIsOpen] = useState(true);

    const { t } = useTranslation();

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.isOpen]: isOpen }, [className])}
        >
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.main} className={cls.item}>
                    <MainLogo className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>

                <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.about} className={cls.item}>
                    <AboutLogo className={cls.icon} />
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>

            <Button
                onClick={handleToggle}
                data-testid="toggleButton"
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
            >
                {isOpen ? '>' : '<'}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} short={isOpen} />
            </div>
        </div>
    );
}
