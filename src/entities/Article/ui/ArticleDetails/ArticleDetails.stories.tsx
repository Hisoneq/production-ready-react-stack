import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Article, ArticleBlockTypes, ArticleTypes } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs'],
    args: {
        id: '1',
    },
    decorators: [StoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

const artice: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'hisone',
    },
    title: 'JS news',
    subtitle: 'Subtitle for this js article',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
    views: 67,
    createdAt: '16.01.2026',
    type: [ArticleTypes.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockTypes.TEXT,
            title: 'Заголовок блока',
            paragraphs: [
                '07.01.2026 Tailwind Labs — компания, стоящая за фреймворком Tailwind CSS, — уволила 75% инженеров на фоне резкого падения выручки примерно на 80%. Об этом стало известно во время обсуждения добавления файла llm.txt на сайт проекта.',
                'С начала 2023 года трафик документации снизился примерно на 40%, несмотря на продолжающийся рост популярности Tailwind. По словам представителей компании, причиной стал активный рост ИИ-инструментов, которые умеют генерировать UI-компоненты и тем самым снижают спрос на платные продукты, такие как Tailwind UI.',
                'С другой стороны, сама популярность Tailwind как технологии продолжает расти: фреймворк всё активнее внедряется компаниями и разработчиками по всему миру. Это создаёт риск своеобразного «вендор-лока»: если Tailwind Labs из-за финансового давления будет вынуждена перейти к более жёсткой коммерческой модели или сократить открытые инициативы, бизнесы, сильно зависящие от экосистемы Tailwind, могут оказаться в уязвимом положении.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockTypes.CODE,
            code: "console.log('templateCode');",
        },
        {
            id: '3',
            type: ArticleBlockTypes.IMAGE,
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/b0d/c84/4d8/b0dc844d8e03ffc246764d9100d20f7f.png',
            title: 'Рисунок 1 - Пост CEO Tailwind',
        },
    ],
};

export const Default: Story = {
    decorators: [
        StoreDecorator({
            initialState: {
                articleDetail: {
                    data: artice,
                    isLoading: false,
                },
            },
        }),
    ],
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            initialState: {
                articleDetail: {
                    isLoading: true,
                },
            },
        }),
    ],
};

export const Error: Story = {
    decorators: [
        StoreDecorator({
            initialState: {
                articleDetail: {
                    isLoading: false,
                    error: 'error',
                },
            },
        }),
    ],
};
