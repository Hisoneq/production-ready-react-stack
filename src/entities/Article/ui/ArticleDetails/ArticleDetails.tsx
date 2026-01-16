import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from '../../../../shared/ui';
import { Sketeton } from '../../../../shared/ui/Sketeton/Sketeton';
import { TextAlign } from '../../../../shared/ui/Text/Text';
import { getArticleDetailData, getArticleDetailError } from '../../model/selectors/articleDetail';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailReducer } from '../../model/slice/articleDetailSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetail: articleDetailReducer,
};

export const ArticleDetails = React.memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();

    const { t } = useTranslation('article');

    // const isLoading = useSelector(getArticleDetailIsLoading);
    const isLoading = true;
    const error = useSelector(getArticleDetailError);
    const article = useSelector(getArticleDetailData);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Sketeton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Sketeton className={cls.title} width={300} height={32} />
                <Sketeton className={cls.skeleton} width={600} height={32} />
                <Sketeton className={cls.skeleton} width={'100%'} height={200} />
                <Sketeton className={cls.skeleton} width={'100%'} height={200} />
            </div>
        );
    } else if (error) {
        content = <Text title={t('Ошибка при загрузке статьи.')} align={TextAlign.CENTER} />;
    } else {
        // eslint-disable-next-line i18next/no-literal-string
        content = <div>Article details</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} name="articleDetail">
            <div className={classNames(cls.articleDetails, {}, [className])}>{content}</div>
        </DynamicModuleLoader>
    );
});
