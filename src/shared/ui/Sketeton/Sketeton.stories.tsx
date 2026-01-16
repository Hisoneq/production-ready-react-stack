import type { Meta, StoryObj } from '@storybook/react';
import { Sketeton } from './Sketeton';

const meta: Meta<typeof Sketeton> = {
    title: 'shared/Sketeton',
    component: Sketeton,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
        width: {
            control: 'text',
        },
        height: {
            control: 'text',
        },
        border: {
            control: 'number',
        },
    },
    args: {
        width: '100px',
        height: '100px',
        border: '0px',
    },
};

export default meta;
type Story = StoryObj<typeof Sketeton>;

export const Default: Story = {
    args: {},
};

export const Circle: Story = {
    args: {
        border: '50%',
    },
};
