import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'class name',
        },
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
    args: {},
};
