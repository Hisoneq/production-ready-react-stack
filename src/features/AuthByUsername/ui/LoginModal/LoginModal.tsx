import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
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
            <LoginForm />
        </Modal>
    );
}
