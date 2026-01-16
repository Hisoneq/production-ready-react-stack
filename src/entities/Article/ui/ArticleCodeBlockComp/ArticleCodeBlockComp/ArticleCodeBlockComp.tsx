import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../../model/types/article';
import cls from './ArticleCodeBlockComp.module.scss';

interface ArticleCodeBlockCompProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComp = React.memo(
    ({ className, block }: ArticleCodeBlockCompProps) => {
        return (
            <div className={classNames(cls.articleCodeBlockComp, {}, [className])}>
                <Code text={block.code} />
            </div>
        );
    }
);
