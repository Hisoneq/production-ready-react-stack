import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'text',
            description: 'Текст',
        },
        placeholder: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        value: '123123123',
        placeholder: 'Enter text',
    },
};
