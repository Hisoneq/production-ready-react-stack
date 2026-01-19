import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'urFolder/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {},
};
