import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
    const { theme } = useTheme();

    return (
    <div className={classNames('app', {}, [theme])}>
        <Suspense fallback=''>
            <NavBar />
            <div className='content-page'>
                <SideBar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
    )
}