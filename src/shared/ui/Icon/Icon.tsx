import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = React.memo(({ className, Svg }: IconProps) => {
    return <Svg className={classNames(cls.icon, {}, [className])}></Svg>;
});
