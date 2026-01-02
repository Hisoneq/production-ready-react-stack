import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: TextTheme;
    'data-testid'?: string;
}

export const Text = React.memo(
    ({
        className,
        title,
        description,
        theme = TextTheme.PRIMARY,
        'data-testid': dataTestId,
    }: TextProps) => {
        return (
            <div
                className={classNames(cls.text, { [cls[theme]]: true }, [className])}
                data-testid={dataTestId}
            >
                {title && <p className={cls.title}>{title}</p>}
                {description && <p className={cls.description}>{description}</p>}
            </div>
        );
    }
);
