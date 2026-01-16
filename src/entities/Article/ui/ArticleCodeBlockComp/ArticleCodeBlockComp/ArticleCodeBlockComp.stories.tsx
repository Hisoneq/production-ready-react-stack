import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlockComp } from './ArticleCodeBlockComp';

const meta: Meta<typeof ArticleCodeBlockComp> = {
    title: 'urFolder/ArticleCodeBlockComp',
    component: ArticleCodeBlockComp,
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
type Story = StoryObj<typeof ArticleCodeBlockComp>;

export const Default: Story = {
    args: {},
};
