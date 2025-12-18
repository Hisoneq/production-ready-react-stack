import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export const enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children?: ReactNode;
    theme?: ThemeButton;
}

export function Button({ className, children, theme, ...otherProps}: ButtonProps) {
    return (
        <button className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
            { children }
        </button>
    );
}