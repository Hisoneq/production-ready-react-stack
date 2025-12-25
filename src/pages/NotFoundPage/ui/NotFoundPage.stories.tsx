import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

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
