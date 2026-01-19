import React, { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = React.memo(({ className, children, ...otherProps }: CardProps) => {
    return (
        <div className={classNames(cls.card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});
