import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: Object.values(AppLinkTheme),
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
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Primary Link',
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Secondary Link',
    },
};
