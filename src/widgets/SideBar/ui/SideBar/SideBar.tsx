import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { getSidebarItems } from '../../model/selectors/getSideBarItems';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = React.memo(({ className }: SideBarProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const sideBarItemList = useSelector(getSidebarItems);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.isOpen]: isOpen }, [className])}
        >
            <div className={cls.items}>
                {sideBarItemList.map((item) => {
                    return <SideBarItem item={item} isOpen={isOpen} key={item.path} />;
                })}
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
});
