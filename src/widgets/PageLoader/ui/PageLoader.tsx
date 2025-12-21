import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Loader } from 'shared/ui/';
import './PageLoader.scss';

interface PageLoaderProps {
    className?: string;
}

export function PageLoader({ className }: PageLoaderProps) {
    return (
        <div className={classNames('page_loader', {}, [className])}>
            <Loader />
        </div>
    );
}
