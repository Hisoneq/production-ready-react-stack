import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './<FTName>.module.scss';

interface <FTName>Props {
    className?: string;
}

export const <FTName> = React.memo(({ className }: <FTName>Props) => {
    return (
        <div className={classNames(cls.<FTName | kebabcase>, {}, [className])}>
            {/* Component content */}
        </div>
    );
});