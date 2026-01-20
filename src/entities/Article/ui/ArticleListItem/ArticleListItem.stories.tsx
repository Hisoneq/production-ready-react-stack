/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ArticleBlockTypes, ArticleTypes, ArticleView } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
        view: {
            control: 'select',
            options: [ArticleView.BIG, ArticleView.SMALL],
            description: 'Вид отображения статьи',
        },
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

// Моковые данные для BIG вида
const mockArticleBig = {
    id: '1',
    title: 'Заголовок статьи для BIG вида',
    subtitle: 'Подзаголовок статьи',
    img: 'https://via.placeholder.com/600x300',
    views: 150,
    createdAt: '2024-01-01',
    type: [ArticleTypes.IT, ArticleTypes.SCIENCE],
    user: {
        id: '1',
        username: 'JohnDoe',
        avatar: 'https://via.placeholder.com/30',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockTypes.TEXT,
            title: 'Введение',
            paragraphs: [
                'Это первый параграф текста в блоке статьи.',
                'Второй параграф содержит дополнительную информацию.',
                'Третий параграф завершает блок текста.',
            ],
        },
    ],
};

// Моковые данные для SMALL вида
const mockArticleSmall = {
    id: '2',
    title: 'Короткий заголовок',
    subtitle: 'Подзаголовок',
    img: 'https://via.placeholder.com/200x150',
    views: 75,
    createdAt: '2024-01-02',
    type: [ArticleTypes.SCIENCE],
    user: {
        id: '2',
        username: 'JaneSmith',
        avatar: 'https://via.placeholder.com/30',
    },
    blocks: [],
};

export const BigView: Story = {
    args: {
        article: mockArticleBig as any,
        view: ArticleView.BIG,
    },
};

export const SmallView: Story = {
    args: {
        article: mockArticleSmall as any,
        view: ArticleView.SMALL,
    },
};

export const BigWithoutTextBlock: Story = {
    args: {
        article: {
            ...mockArticleBig,
            blocks: [],
        } as any,
        view: ArticleView.BIG,
    },
};
