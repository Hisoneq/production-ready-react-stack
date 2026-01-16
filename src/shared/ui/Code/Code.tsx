import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import CopyCode from '../../assets/icons/CopyCode.svg';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = React.memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copy} theme={ButtonTheme.CLEAR}>
                <CopyCode className={cls.copyIcon} />
            </Button>
            <code>{text}</code>;
        </pre>
    );
});
