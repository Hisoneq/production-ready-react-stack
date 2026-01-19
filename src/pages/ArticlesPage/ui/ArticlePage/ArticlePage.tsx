import { Article, ArticleList, ArticleView } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const articleMock = {
    id: '1',
    user: {
        id: '1',
        username: 'hisone',
        avatar: 'https://as1.ftcdn.net/jpg/02/98/08/90/1000_F_298089025_M5g7h3Y3o5y2Aptfe0VKLMHHbsvThQdt.jpg',
    },
    title: 'JS news',
    subtitle: 'Subtitle for this js article',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
    views: 67,
    createdAt: '16.01.2026',
    userId: '1',
    type: ['IT'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок блока',
            paragraphs: [
                '07.01.2026 Tailwind Labs — компания, стоящая за фреймворком Tailwind CSS, — уволила 75% инженеров на фоне резкого падения выручки примерно на 80%. Об этом стало известно во время обсуждения добавления файла llm.txt на сайт проекта.',
                'С начала 2023 года трафик документации снизился примерно на 40%, несмотря на продолжающийся рост популярности Tailwind. По словам представителей компании, причиной стал активный рост ИИ-инструментов, которые умеют генерировать UI-компоненты и тем самым снижают спрос на платные продукты, такие как Tailwind UI.',
                'С другой стороны, сама популярность Tailwind как технологии продолжает расти: фреймворк всё активнее внедряется компаниями и разработчиками по всему миру. Это создаёт риск своеобразного «вендор-лока»: если Tailwind Labs из-за финансового давления будет вынуждена перейти к более жёсткой коммерческой модели или сократить открытые инициативы, бизнесы, сильно зависящие от экосистемы Tailwind, могут оказаться в уязвимом положении.',
            ],
        },
        {
            id: '2',
            type: 'CODE',
            code: "console.log('templateCode');",
        },
        {
            id: '3',
            type: 'IMAGE',
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/b0d/c84/4d8/b0dc844d8e03ffc246764d9100d20f7f.png',
            title: 'Рисунок 1 - Пост CEO Tailwind',
        },
    ],
} as Article;

export default function ArticlesPage({ className }: ArticlesPageProps) {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            <ArticleList
                articles={[articleMock, articleMock]}
                isLoading={true}
                view={ArticleView.BIG}
            />
        </div>
    );
}
