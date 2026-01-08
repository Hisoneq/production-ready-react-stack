import React, { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = React.memo(
    ({ className, label, options, value, onChange, readonly }: SelectProps) => {
        const optionsList = useMemo(() => {
            return options?.map((opt) => (
                <option value={opt.value} className={cls.option} key={opt.value}>
                    {opt.content}
                </option>
            ));
        }, [options]);

        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value);
        };
        return (
            <div className={classNames(cls.wrapper, {}, [className])}>
                {label && <span className={cls.label}>{label + '>'}</span>}
                <select
                    className={cls.select}
                    value={value}
                    onChange={onChangeHandler}
                    disabled={readonly}
                >
                    {optionsList}
                </select>
            </div>
        );
    }
);
