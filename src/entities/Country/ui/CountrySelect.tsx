import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Select } from 'shared/ui';
import { Country } from '../model/types/Country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = React.memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback((value: string) => {
            onChange?.(value as Country);
        }, []);

        return (
            <Select
                className={classNames('', {}, [className])}
                label={t('Страна')}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    }
);
