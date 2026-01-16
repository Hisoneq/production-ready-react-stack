import React, { CSSProperties } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Sketeton.module.scss';

interface SketetonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
}

export const Sketeton = React.memo(({ className, width, height, border }: SketetonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return <div className={classNames(cls.sketeton, {}, [className])} style={styles}></div>;
});
