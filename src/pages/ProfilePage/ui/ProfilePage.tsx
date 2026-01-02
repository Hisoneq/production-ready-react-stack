import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { profileReducer } from '../../../entities/Profile';
import {
    DynamicModuleLoader,
    ReducersList,
} from '../../../shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
    className?: string;
}

export default function ProfilePage({ className }: ProfilePageProps) {
    const { t } = useTranslation();

    const reducers: ReducersList = {
        profile: profileReducer,
    };

    return (
        <DynamicModuleLoader name="profile" reducers={reducers}>
            <div className={classNames('', {}, [className])}>{t('Страница пользователя')}</div>
        </DynamicModuleLoader>
    );
}
