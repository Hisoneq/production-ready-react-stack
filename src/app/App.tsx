import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';

export default function App() {


    const { theme, toggleTheme } = useTheme();

    return (
    <div className={classNames('app', {}, [theme])}>
        <NavBar />
        <AppRouter />
        <button onClick={toggleTheme}>Theme</button>
    </div>
    )
}