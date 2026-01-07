import React, {
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: HTMLInputTypeAttribute;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const Input = React.memo(
    ({
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        ...otherProps
    }: InputProps) => {
        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
            setCaretPosition(e.target.value.length);
        };

        const ref = useRef<HTMLInputElement>(null);

        const [isFocused, setIsFocused] = useState(false);
        const [caretPosition, setCaretPosition] = useState(0);

        const isCaretVisible = isFocused && !readonly;

        useEffect(() => {
            if (autoFocus) {
                setIsFocused(true);
                ref.current?.focus();
            }
        }, [autoFocus]);

        const onFocus = () => {
            setIsFocused(true);
        };

        const onBlur = () => {
            setIsFocused(false);
        };

        const onSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement;
            setCaretPosition(target.selectionStart || 0);
        };

        const mods: Mods = {
            [cls.readonly]: readonly,
        };

        return (
            <div className={classNames(cls.inputWrapper, mods, [className])}>
                {placeholder && <div className={cls.placeholder}>{placeholder + '>'}</div>}
                <div className={cls.caretWrapper}>
                    <input
                        ref={ref}
                        type={type}
                        value={value}
                        onChange={onChangeHandler}
                        className={cls.input}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        readOnly={readonly}
                        {...otherProps}
                    />
                    {isCaretVisible && (
                        <span
                            className={cls.caret}
                            style={{
                                left: `${caretPosition * 9.6}px`,
                            }}
                        />
                    )}
                </div>
            </div>
        );
    }
);
