import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export function NavBar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Пример текста модалки')}
            </Modal>
        </div>
    );
}
