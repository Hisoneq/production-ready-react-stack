import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'urFolder/ArticleListItem',
    component: ArticleListItem,
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
type Story = StoryObj<typeof ArticleListItem>;

export const Default: Story = {
    args: {},
};
