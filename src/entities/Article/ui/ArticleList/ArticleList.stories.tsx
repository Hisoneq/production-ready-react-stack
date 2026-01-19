import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'urFolder/ArticleList',
    component: ArticleList,
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
type Story = StoryObj<typeof ArticleList>;

export const Default: Story = {
    args: {},
};
