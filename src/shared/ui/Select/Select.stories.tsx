import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
        },
        label: {
            control: 'text',
        },
        options: {
            control: 'object',
        },
    },
    args: {
        label: 'Temp label',
        options: [
            {
                value: '123',
                content: 'Первый контент',
            },
            {
                value: '1234',
                content: 'Второй контент',
            },
            {
                value: '1235',
                content: 'Третий контент',
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {},
};

export const WithoutLabel: Story = {
    args: {
        label: undefined,
    },
};
