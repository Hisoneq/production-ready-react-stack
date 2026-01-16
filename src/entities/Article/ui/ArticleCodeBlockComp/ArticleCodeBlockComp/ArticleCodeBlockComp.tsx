import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ArticleCodeBlockComp.module.scss';

interface ArticleCodeBlockCompProps {
    className?: string;
}

export const ArticleCodeBlockComp = React.memo(({ className }: ArticleCodeBlockCompProps) => {
    return (
        <div className={classNames(cls.articleCodeBlockComp, {}, [className])}>
            {/* Component content */}
        </div>
    );
});
