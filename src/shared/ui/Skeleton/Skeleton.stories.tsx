import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
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
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {},
};

export const Circle: Story = {
    args: {
        border: '50%',
    },
};
