import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';

export default function App() {


    const { theme } = useTheme();

    return (
    <div className={classNames('app', {}, [theme])}>
        <NavBar />
        <AppRouter />
    </div>
    )
}