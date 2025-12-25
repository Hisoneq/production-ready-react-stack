import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
    },
};

export default meta;
type Story = StoryObj<typeof PageError>;

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
