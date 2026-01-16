import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ArticleImageBlockComp.module.scss';

interface ArticleImageBlockCompProps {
    className?: string;
}

export const ArticleImageBlockComp = React.memo(({ className }: ArticleImageBlockCompProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleImageBlockComp, {}, [className])}>
            {t('ArticleImageBlockComp')}
        </div>
    );
});
