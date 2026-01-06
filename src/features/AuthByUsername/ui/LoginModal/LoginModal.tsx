import { Suspense } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Loader, Modal } from 'shared/ui';
import LoginFormAsync from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            className={classNames(cls.loginmodal, {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
}
