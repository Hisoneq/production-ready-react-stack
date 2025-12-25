import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { LanguageSwitcher } from './LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
    title: 'widgets/LanguageSwitcher',
    component: LanguageSwitcher,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
    },
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {
    args: {},
};

export const DarkTheme: Story = {
    args: {},
    globals: {
        theme: Theme.DARK,
    },
};

export const LightTheme: Story = {
    args: {},
    globals: {
        theme: Theme.LIGHT,
    },
};
