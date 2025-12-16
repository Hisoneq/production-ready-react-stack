import { Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './styles/index.scss';
import { Suspense } from 'react'
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

export default function App() {


    const { theme, toggleTheme } = useTheme();

    return (
    <div className={classNames('app', {}, [theme])}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleTheme}>Theme</button>
        <Suspense fallback={<div>Loading...</div>}> 
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Suspense>
    </div>
    )
}