import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { Theme } from './themeContext';
import { LOCAL_STORAGE_THEME_KEY } from './themeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export default function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const currentTheme = theme || Theme.DARK;

    const toggleTheme = () => {
        const newTheme = currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: currentTheme, toggleTheme };
}