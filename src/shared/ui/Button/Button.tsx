import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export function Button({
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.L,
    ...otherProps
}: ButtonProps) {
    const mods = {
        [cls.square]: square,
    };

    const ads = [className, cls[theme], cls[size]];

    return (
        <button className={classNames(cls.button, mods, ads)} {...otherProps}>
            {children}
        </button>
    );
}
