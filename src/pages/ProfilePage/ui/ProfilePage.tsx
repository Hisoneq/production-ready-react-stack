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
import {
    DynamicModuleLoader,
    ReducersList,
} from '../../../shared/lib/helpers/DynamicModuleLoader/DynamicModuleLoader';

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
        dispatch(fetchProfileData());
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

    return (
        <DynamicModuleLoader name="profile" reducers={reducers}>
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
            />
        </DynamicModuleLoader>
    );
}
