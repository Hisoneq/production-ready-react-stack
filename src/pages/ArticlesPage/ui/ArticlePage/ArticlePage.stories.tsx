import type { Meta, StoryObj } from '@storybook/react';
import ArticlePage from './ArticlePage';

const meta: Meta<typeof ArticlePage> = {
    title: 'urFolder/ArticlePage',
    component: ArticlePage,
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
type Story = StoryObj<typeof ArticlePage>;

export const Default: Story = {
    args: {},
};
