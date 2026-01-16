export enum ArticleBlockTypes {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockTypes;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockTypes.CODE;
    code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockTypes.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockTypes.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlock = ArticleImageBlock | ArticleTextBlock | ArticleCodeBlock;

export enum ArticleTypes {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONIMICS = 'ECONIMICS',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlock[];
}
