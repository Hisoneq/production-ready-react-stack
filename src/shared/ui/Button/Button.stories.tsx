import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: Object.values(ButtonTheme),
        },
        children: {
            control: 'text',
        },
        className: {
            control: 'text',
        },
        onClick: { action: 'clicked' },
        square: {
            control: 'boolean',
        },
        size: {
            control: 'select',
            options: Object.values(ButtonSize),
        },
    },
    args: {
        children: 'Button Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear Button',
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline Button',
    },
};

export const OutlineSizeM: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline Button M',
        size: ButtonSize.M,
    },
};

export const OutlineSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline Button L',
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline Button XL',
        size: ButtonSize.XL,
    },
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Background Button',
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Inverted Button',
    },
};

export const SquareSizeM: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.XL,
    },
};
