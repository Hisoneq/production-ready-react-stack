import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme, Text } from 'shared/ui';
import { getUserAuthData } from '../../../../entities/User';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export function ProfilePageHeader({ className }: ProfilePageHeaderProps) {
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id == profileData?.id;

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, []);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, []);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, []);

    return (
        <div className={classNames(cls.profilepageheader, {}, [className])}>
            <Text title={t('Профиль')} />

            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.editBtn}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <div className={cls.groupBtns}>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                                className={cls.cancelBtn}
                            >
                                {t('Отменить')}
                            </Button>

                            <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                {t('Сохранить')}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
