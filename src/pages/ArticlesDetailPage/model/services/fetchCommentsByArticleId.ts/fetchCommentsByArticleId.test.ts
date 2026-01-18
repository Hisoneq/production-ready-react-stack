import axios from 'axios';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from '../../../../../entities/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

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

describe('fetchCommentsByArticleId', () => {
    let thunk: TestAsyncThunk<Comment[], string | undefined, string>;

    beforeEach(() => {
        thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('success', async () => {
        mockedAxios.get.mockResolvedValue({ data: mockComments });

        const result = await thunk.callThunk('1');

        expect(mockedAxios.get).toHaveBeenCalledWith('/comments', {
            params: {
                articleId: '1',
                _expand: 'user',
            },
        });

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockComments);
    });

    test('error', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Network Error'));

        const result = await thunk.callThunk('1');

        expect(mockedAxios.get).toHaveBeenCalledWith('/comments', {
            params: {
                articleId: '1',
                _expand: 'user',
            },
        });

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибочка');
    });

    test('empty article id', async () => {
        const result = await thunk.callThunk(undefined);

        expect(mockedAxios.get).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('empty id');
    });
});
