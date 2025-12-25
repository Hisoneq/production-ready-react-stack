import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
    title: 'widgets/SideBar',
    component: SideBar,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
    },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

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
