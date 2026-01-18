import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailReducer } from './articleDetailSlice';

const mockArticle: Article = {
    id: '1',
    title: 'Test Article',
    subtitle: 'Test Subtitle',
    img: 'test.jpg',
    views: 100,
    createdAt: '2024-01-01',
    type: [],
    blocks: [],
};

describe('articleDetailSlice', () => {
    test('should handle fetchArticleById.pending', () => {
        const state: ArticleDetailsSchema = {
            isLoading: false,
            error: 'previous error',
            data: undefined,
        };

        const newState = articleDetailReducer(state, fetchArticleById.pending);

        expect(newState.isLoading).toBe(true);
        expect(newState.error).toBeUndefined();
    });

    test('should handle fetchArticleById.fulfilled', () => {
        const state: ArticleDetailsSchema = {
            isLoading: true,
            error: undefined,
            data: undefined,
        };

        const newState = articleDetailReducer(
            state,
            fetchArticleById.fulfilled(mockArticle, '', '1')
        );

        expect(newState.isLoading).toBe(false);
        expect(newState.data).toEqual(mockArticle);
        expect(newState.error).toBeUndefined();
    });

    test('should handle fetchArticleById.rejected', () => {
        const state: ArticleDetailsSchema = {
            isLoading: true,
            error: undefined,
            data: undefined,
        };

        const newState = articleDetailReducer(
            state,
            fetchArticleById.rejected(null, '', '1', 'Article not found')
        );

        expect(newState.isLoading).toBe(false);
        expect(newState.error).toBe('Article not found');
        expect(newState.data).toBeUndefined();
    });

    test('should clear error on pending', () => {
        const state: ArticleDetailsSchema = {
            isLoading: false,
            error: 'Some old error',
            data: mockArticle,
        };

        const newState = articleDetailReducer(state, fetchArticleById.pending);

        expect(newState.error).toBeUndefined();
        expect(newState.data).toEqual(mockArticle);
        expect(newState.isLoading).toBe(true);
    });

    test('should replace data on new successful fetch', () => {
        const oldArticle: Article = {
            id: '2',
            title: 'Old Article',
            subtitle: 'Old Subtitle',
            img: 'old.jpg',
            views: 50,
            createdAt: '2023-01-01',
            type: [],
            blocks: [],
        };

        const state: ArticleDetailsSchema = {
            isLoading: false,
            error: undefined,
            data: oldArticle,
        };

        const newState = articleDetailReducer(
            state,
            fetchArticleById.fulfilled(mockArticle, '', '1')
        );

        expect(newState.data).toEqual(mockArticle);
        expect(newState.data).not.toEqual(oldArticle);
    });
});
