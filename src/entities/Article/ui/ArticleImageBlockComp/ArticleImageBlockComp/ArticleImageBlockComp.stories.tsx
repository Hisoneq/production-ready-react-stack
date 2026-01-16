import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlockComp } from './ArticleImageBlockComp';

const meta: Meta<typeof ArticleImageBlockComp> = {
    title: 'urFolder/ArticleImageBlockComp',
    component: ArticleImageBlockComp,
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
type Story = StoryObj<typeof ArticleImageBlockComp>;

export const Default: Story = {
    args: {},
};
