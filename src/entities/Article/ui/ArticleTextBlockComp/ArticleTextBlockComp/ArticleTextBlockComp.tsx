import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ArticleTextBlockComp.module.scss';

interface ArticleTextBlockCompProps {
    className?: string;
}

export const ArticleTextBlockComp = React.memo(({ className }: ArticleTextBlockCompProps) => {
    return (
        <div className={classNames(cls.articleTextBlockComp, {}, [className])}>
            {/* Component content */}
        </div>
    );
});
