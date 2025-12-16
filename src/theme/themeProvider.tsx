import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./themeContext";
import { useMemo, useState } from "react";
import { Theme } from "./themeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK;

export default function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}