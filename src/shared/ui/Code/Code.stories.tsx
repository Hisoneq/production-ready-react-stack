import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
        text: {
            control: 'text',
        },
    },
    args: {
        text: 'console.log("Hello world!")',
    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
    args: {},
};
