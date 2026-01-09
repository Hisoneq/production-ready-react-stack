import {
    fetchProfileData,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';
import {
    DynamicModuleLoader,
    ReducersList,
} from '../../../shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

export default function ProfilePage() {
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileFormData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    const reducers: ReducersList = {
        profile: profileReducer,
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, []);

    const onChangeFirstname = useCallback(
        (value?: string) => dispatch(profileActions.updateData({ first: value || '' })),
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value?: string) => dispatch(profileActions.updateData({ lastname: value || '' })),
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: string) => dispatch(profileActions.updateData({ age: Number(value) || 0 })),
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => dispatch(profileActions.updateData({ city: value || '' })),
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => dispatch(profileActions.updateData({ username: value || '' })),
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => dispatch(profileActions.updateData({ avatar: value || '' })),
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => dispatch(profileActions.updateData({ currency: currency })),
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (value: Country) => dispatch(profileActions.updateData({ country: value })),
        [dispatch]
    );

    return (
        <DynamicModuleLoader name="profile" reducers={reducers}>
            <ProfilePageHeader />
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>
    );
}
