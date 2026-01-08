import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export function Avatar({ className, src, size, alt }: AvatarProps) {
    const style = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        };
    }, [size]);

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.avatar, {}, [className])}
            style={style}
        />
    );
}
