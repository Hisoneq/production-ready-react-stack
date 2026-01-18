import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
        isLoading: {
            control: 'boolean',
            description: 'Флаг загрузки',
        },
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

// Моковые данные для комментария
const mockComment = {
    id: '1',
    text: 'Это тестовый комментарий с обычным текстом для демонстрации работы компонента',
    user: {
        id: '1',
        username: 'TestUser',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
};

export const Default: Story = {
    args: {
        comment: mockComment,
    },
};

export const WithoutAvatar: Story = {
    args: {
        comment: {
            ...mockComment,
            user: {
                ...mockComment.user,
                avatar: undefined,
            },
        },
    },
};

export const WithLongText: Story = {
    args: {
        comment: {
            ...mockComment,
            text: 'Это очень длинный комментарий, который демонстрирует как компонент обрабатывает многострочный текст. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const LoadingWithCustomClass: Story = {
    args: {
        isLoading: true,
        className: 'custom-loading-class',
    },
};

export const WithCustomClass: Story = {
    args: {
        comment: mockComment,
        className: 'custom-comment-class',
    },
};
