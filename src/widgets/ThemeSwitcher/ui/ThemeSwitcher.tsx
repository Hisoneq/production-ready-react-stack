import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
        </Button>
    );
}