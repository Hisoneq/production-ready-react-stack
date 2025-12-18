import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

export default function App() {


    const { theme } = useTheme();

    return (
    <div className={classNames('app', {}, [theme])}>
        <NavBar />
        <div className='content-page'>
            <SideBar />
            <AppRouter />
        </div>
    </div>
    )
}