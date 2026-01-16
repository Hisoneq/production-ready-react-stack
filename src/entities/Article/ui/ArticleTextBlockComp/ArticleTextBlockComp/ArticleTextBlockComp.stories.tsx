import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTextBlockComp } from './ArticleTextBlockComp';

const meta: Meta<typeof ArticleTextBlockComp> = {
    title: 'urFolder/ArticleTextBlockComp',
    component: ArticleTextBlockComp,
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
type Story = StoryObj<typeof ArticleTextBlockComp>;

export const Default: Story = {
    args: {},
};
