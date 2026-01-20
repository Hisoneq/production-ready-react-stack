import type { Meta, StoryObj } from '@storybook/react';
import { Article, ArticleTypes, ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
        view: {
            control: 'select',
            options: [ArticleView.BIG, ArticleView.SMALL],
            description: 'Вид отображения статей',
        },
        isLoading: {
            control: 'boolean',
            description: 'Флаг загрузки',
        },
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

const mockArticles: Article[] = [
    {
        id: '1',
        title: 'Заголовок статьи 1',
        subtitle: 'Подзаголовок статьи 1',
        img: 'https://via.placeholder.com/200',
        views: 100,
        createdAt: '2024-01-01',
        type: [ArticleTypes.IT, ArticleTypes.SCIENCE],
        blocks: [],
        user: { id: '1', username: 'User1' },
    },
    {
        id: '2',
        title: 'Заголовок статьи 2',
        subtitle: 'Подзаголовок статьи 2',
        img: 'https://via.placeholder.com/200',
        views: 200,
        createdAt: '2024-01-02',
        type: [ArticleTypes.IT],
        blocks: [],
        user: { id: '2', username: 'User2' },
    },
    {
        id: '3',
        title: 'Заголовок статьи 3',
        subtitle: 'Подзаголовок статьи 3',
        img: 'https://via.placeholder.com/200',
        views: 300,
        createdAt: '2024-01-03',
        type: [ArticleTypes.SCIENCE],
        blocks: [],
        user: { id: '3', username: 'User3' },
    },
];

export const Default: Story = {
    args: {
        articles: mockArticles,
        view: ArticleView.BIG,
    },
};

export const SmallView: Story = {
    args: {
        articles: mockArticles,
        view: ArticleView.SMALL,
    },
};

export const LoadingBig: Story = {
    args: {
        isLoading: true,
        view: ArticleView.BIG,
    },
};

export const LoadingSmall: Story = {
    args: {
        isLoading: true,
        view: ArticleView.SMALL,
    },
};

export const EmptyList: Story = {
    args: {
        articles: [],
        view: ArticleView.BIG,
    },
};
