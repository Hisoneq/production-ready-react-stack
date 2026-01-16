import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../../model/types/article';
import cls from './ArticleTextBlockComp.module.scss';

interface ArticleTextBlockCompProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComp = React.memo(
    ({ className, block }: ArticleTextBlockCompProps) => {
        return (
            <div className={classNames(cls.articleTextBlockComp, {}, [className])}>
                {block.title && <Text title={block.title} className={cls.title} />}
                {block.paragraphs.map((paragraph, index) => (
                    <Text key={index} description={paragraph} className={cls.paragraph} />
                ))}
            </div>
        );
    }
);
