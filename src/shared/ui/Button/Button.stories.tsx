import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: Object.values(ThemeButton),
        },
        children: {
            control: 'text',
        },
        className: {
            control: 'text',
        },
        onClick: { action: 'clicked' },
    },
    args: {
        children: 'Button Text',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Clear Button',
    },
};

export const Otline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Clear Button',
    },
};
