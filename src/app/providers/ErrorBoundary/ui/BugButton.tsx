import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from 'shared/ui';

interface BugButtonProps {
    className?: string;
}

export function BugButton({ className }: BugButtonProps) {
    const [error, setError] = useState(false);

    const { t } = useTranslation();

    const toggleError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button className={classNames('', {}, [className])} onClick={toggleError}>
            {t('Выбросить ошибку')}
            {error}
        </Button>
    );
}
