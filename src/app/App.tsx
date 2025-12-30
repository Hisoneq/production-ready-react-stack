import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { userActions } from '../entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export default function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="loading...">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
