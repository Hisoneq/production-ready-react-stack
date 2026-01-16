import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text } from '../../../../../shared/ui';
import { TextAlign } from '../../../../../shared/ui/Text/Text';
import { ArticleImageBlock } from '../../../model/types/article';
import cls from './ArticleImageBlockComp.module.scss';

interface ArticleImageBlockCompProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComp = React.memo(
    ({ className, block }: ArticleImageBlockCompProps) => {
        return (
            <div className={classNames(cls.articleImageBlockComp, {}, [className])}>
                <img src={block.src} className={cls.img} alt={block.title} />
                {block.title && <Text description={block.title} align={TextAlign.CENTER} />}
            </div>
        );
    }
);
