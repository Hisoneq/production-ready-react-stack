import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, Input } from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Test/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = React.memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.loginform, {}, [className])}>
            <Text title={t('Форма авторизации')} />

            {error && <Text title={error} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                placeholder={t('Введите ник')}
                onChange={onChangeUsername}
                value={username}
                autoFocus
            />
            <Input
                type="text"
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
                {t('Войти')}
            </Button>
        </div>
    );
});
