import React, { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = React.memo(
    ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps }: AppLinkProps) => {
        return (
            <Link
                to={to}
                className={classNames(cls.applink, {}, [className, cls[theme]])}
                {...otherProps}
            >
                {children}
            </Link>
        );
    }
);
