import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId.ts/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const mockComments: Comment[] = [
    {
        id: '1',
        text: 'test comment 1',
        user: { id: '1', username: 'user1' },
    },
    {
        id: '2',
        text: 'test comment 2',
        user: { id: '2', username: 'user2' },
    },
];

describe('articleDetailsCommentsSlice', () => {
    test('should handle fetchCommentsByArticleId.pending', () => {
        const state: ArticleDetailsCommentsSchema = {
            isLoading: false,
            ids: [],
            entities: {},
            error: 'some error',
        };

        const newState = articleDetailsCommentsReducer(state, fetchCommentsByArticleId.pending);

        expect(newState.isLoading).toBe(true);
        expect(newState.error).toBeUndefined();
    });

    test('should handle fetchCommentsByArticleId.fulfilled', () => {
        const state: ArticleDetailsCommentsSchema = {
            isLoading: true,
            ids: [],
            entities: {},
            error: undefined,
        };

        const newState = articleDetailsCommentsReducer(
            state,
            fetchCommentsByArticleId.fulfilled(mockComments, '', '1')
        );

        expect(newState.isLoading).toBe(false);
        expect(newState.ids).toEqual(['1', '2']);
        expect(newState.entities).toEqual({
            '1': mockComments[0],
            '2': mockComments[1],
        });
    });

    test('should handle fetchCommentsByArticleId.rejected', () => {
        const state: ArticleDetailsCommentsSchema = {
            isLoading: true,
            ids: [],
            entities: {},
            error: undefined,
        };

        const newState = articleDetailsCommentsReducer(
            state,
            fetchCommentsByArticleId.rejected(null, '', '1', 'Ошибочка')
        );

        expect(newState.isLoading).toBe(false);
        expect(newState.error).toBe('Ошибочка');
    });
});
