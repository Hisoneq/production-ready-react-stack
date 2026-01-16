import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    title: 'urFolder/ArticleDetails',
    component: ArticleDetails,
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
type Story = StoryObj<typeof ArticleDetails>;

export const Default: Story = {
    args: {},
};
