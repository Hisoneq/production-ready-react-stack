import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '../../../shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
    className?: string;
}

export default function ProfilePage({ className }: ProfilePageProps) {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const reducers: ReducersList = {
        profile: profileReducer,
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, []);

    return (
        <DynamicModuleLoader name="profile" reducers={reducers}>
            <div className={classNames('', {}, [className])}>{t('Страница пользователя')}</div>
            <ProfileCard />
        </DynamicModuleLoader>
    );
}
