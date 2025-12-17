import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';

export default function App() {


    const { theme, toggleTheme } = useTheme();

    return (
    <div className={classNames('app', {}, [theme])}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleTheme}>Theme</button>
        <AppRouter />
    </div>
    )
}