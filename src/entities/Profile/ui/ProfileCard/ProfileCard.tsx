import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Input, Loader, Text } from 'shared/ui';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from '../../../../pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Profile } from '../../model/types/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname: (value?: string) => void;
    onChangeLastname: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    onChangeCity: (value?: string) => void;
}

export function ProfileCard({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
}: ProfileCardProps) {
    const { t } = useTranslation('profile');

    const validationMessages = {
        firstName: t('Имя должно содержать 2-50 букв, пробелов или дефисов'),
        lastName: t('Фамилия должна содержать 2-50 букв, пробелов или дефисов'),
        age: t('Возраст должен быть от 18 до 100 лет'),
        city: t('Город должен содержать 2-50 букв, пробелов или дефисов'),
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.profilecard, {}, [className, cls.loader])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profilecard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    description={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profilecard, {}, [className])}>
            <ProfilePageHeader />
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readOnly={readonly}
                pattern="^[A-Za-zА-Яа-яЁё\s-]{2,50}$"
                title={validationMessages.firstName}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readOnly={readonly}
                pattern="^[A-Za-zА-Яа-яЁё\s-]{2,50}$"
                title={validationMessages.lastName}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readOnly={readonly}
                pattern="^(1[89]|[2-9][0-9]|100)$"
                title={validationMessages.age}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readOnly={readonly}
                pattern="^[A-Za-zА-Яа-яЁё\s\-'.]{2,50}$"
                title={validationMessages.city}
            />
        </div>
    );
}
