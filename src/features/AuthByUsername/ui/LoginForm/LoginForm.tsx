import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, Input } from 'shared/ui';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginform, {}, [className])}>
            <Input type="text" placeholder={t('Введите текст')} autoFocus />
            <Input type="text" placeholder={t('Введите текст')} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
}
