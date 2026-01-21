import React, { CSSProperties } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
}

export const Skeleton = React.memo(({ className, width, height, border }: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return <div className={classNames(cls.skeleton, {}, [className])} style={styles}></div>;
});
