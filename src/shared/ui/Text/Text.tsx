import React from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: TextTheme;
    align?: TextAlign;
    'data-testid'?: string;
}

export const Text = React.memo(
    ({
        className,
        title,
        description,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        'data-testid': dataTestId,
    }: TextProps) => {
        const mods: Mods = {
            [cls[theme]]: true,
            [cls[align]]: true,
        };

        return (
            <div className={classNames(cls.text, mods, [className])} data-testid={dataTestId}>
                {title && <p className={cls.title}>{title}</p>}
                {description && <p className={cls.description}>{description}</p>}
            </div>
        );
    }
);
