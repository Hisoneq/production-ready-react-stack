import { Suspense } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

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
    );
}