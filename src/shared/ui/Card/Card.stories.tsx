import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    args: {
        children: 'Тестовая карточка с текстом',
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
