import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './SideBar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SideBarProps {
    className?: string;
}

export function SideBar({ className }: SideBarProps) {

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.isOpen]: isOpen}, [className])}>
            <button onClick={handleToggle}>toggle</button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
}