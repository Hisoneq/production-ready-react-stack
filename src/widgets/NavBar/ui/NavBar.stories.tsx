import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'widgets/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
    },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
    args: {},
};

export const WithCustomClass: Story = {
    args: {
        className: 'custom-sidebar',
    },
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
