import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme, Input } from 'shared/ui';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';
import { getAddNewCommentText } from '../../model/selectors/addNewCommentSelectors';
import { newCommentActions, newCommentReducers } from '../../model/slice/addNewCommentSlice';
import cls from './AddNewComment.module.scss';

interface AddNewCommentProps {
    className?: string;
    handelSendComment: (text: string) => void;
}

const AddNewComment = React.memo(({ className, handelSendComment }: AddNewCommentProps) => {
    const { t } = useTranslation('article');
    const text = useSelector(getAddNewCommentText);

    const dispatch = useAppDispatch();

    const reducers: ReducersList = {
        addNewComment: newCommentReducers,
    };

    const handleChangeComment = useCallback((value: string) => {
        dispatch(newCommentActions.setText(value));
    }, []);

    const onSendHandler = useCallback(() => {
        if (text) {
            handelSendComment(text);
            handleChangeComment('');
        }
    }, [text]);

    return (
        <DynamicModuleLoader reducers={reducers} name="addNewComment">
            <div className={classNames(cls.addNewComment, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Напишите комментарий...')}
                    value={text}
                    onChange={handleChangeComment}
                />

                <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddNewComment;
