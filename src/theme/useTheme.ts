import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { Theme } from "./themeContext";
import { LOCAL_STORAGE_THEME_KEY } from "./themeContext";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export default function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }

    return { theme, toggleTheme };
}