import type { Meta, StoryObj } from '@storybook/react';
import ArticlesDetailPage from './ArticlesDetailPage';

const meta: Meta<typeof ArticlesDetailPage> = {
    title: 'urFolder/ArticlesDetailPage',
    component: ArticlesDetailPage,
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
type Story = StoryObj<typeof ArticlesDetailPage>;

export const Default: Story = {
    args: {},
};
