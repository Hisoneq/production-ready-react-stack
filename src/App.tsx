import { Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './styles/index.scss';
import MainPageAsync from './pages/MainPage/MainPage.async';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react'
import useTheme from './theme/useTheme';

export default function App() {


    const { theme, toggleTheme } = useTheme();

    return (
    <div className={`app ${theme}`}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleTheme}>Theme</button>
        <Suspense fallback={<div>Loading...</div>}> 
            <Routes>
                <Route path="/" element={<MainPageAsync />} />
                <Route path="/about" element={<AboutPageAsync />} />
            </Routes>
        </Suspense>
    </div>
    )
}