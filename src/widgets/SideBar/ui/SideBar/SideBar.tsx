import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './SideBar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface SideBarProps {
    className?: string;
}

export function SideBar({ className }: SideBarProps) {

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.isOpen]: isOpen}, [className])}>
            <button onClick={handleToggle}>{t('Скрыть')}</button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang}/>
            </div>
        </div>
    );
}