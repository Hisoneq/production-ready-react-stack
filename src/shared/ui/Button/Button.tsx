import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
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
    disabled?: boolean;
}

export const Button = React.memo(
    ({
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square = false,
        size = ButtonSize.L,
        disabled,
        ...otherProps
    }: ButtonProps) => {
        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disabled,
        };

        const ads = [className, cls[theme], cls[size]];

        return (
            <button
                className={classNames(cls.button, mods, ads)}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </button>
        );
    }
);
