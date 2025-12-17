import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './NavBar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';


interface NavbarProps {
    className?: string;
}

export function NavBar({ className }: NavbarProps){
    return (
        <div className={classNames(cls.navbar , {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/" className={cls.mainLink}>Main</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">About</AppLink>
            </div>
        </div>
    )
}