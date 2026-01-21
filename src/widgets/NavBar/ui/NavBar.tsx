import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export const NavBar = React.memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            {authData ? (
                <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            ) : (
                <>
                    <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onShowModal}>
                        {t('Войти')}
                    </Button>
                    {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
                </>
            )}
        </header>
    );
});
