import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export function NavBar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>/</div>
        </div>
    );
}
