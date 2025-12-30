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
}

export function Text({ className, title, description, theme = TextTheme.PRIMARY }: TextProps) {
    return (
        <div className={classNames(cls.text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {description && <p className={cls.description}>{description}</p>}
        </div>
    );
}
