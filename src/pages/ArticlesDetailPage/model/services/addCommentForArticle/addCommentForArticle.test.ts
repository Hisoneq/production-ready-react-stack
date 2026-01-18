import axios from 'axios';
import { Article } from 'entities/Article';
import { getArticleDetailData } from 'entities/Article/model/selectors/articleDetail';
import { getUserAuthData } from 'entities/User';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleTypes } from '../../../../../entities/Article/model/types/article';
import { addCommentForArticle } from './addCommentForArticle';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

jest.mock('entities/User', () => ({
    getUserAuthData: jest.fn(),
}));

jest.mock('entities/Article/model/selectors/articleDetail', () => ({
    getArticleDetailData: jest.fn(),
}));

jest.mock('../fetchCommentsByArticleId.ts/fetchCommentsByArticleId', () => ({
    fetchCommentsByArticleId: jest.fn(() => ({
        type: 'TEST_FETCH_COMMENTS',
    })),
}));

const mockedGetUserAuthData = getUserAuthData as jest.MockedFunction<typeof getUserAuthData>;
const mockedGetArticleDetailData = getArticleDetailData as jest.MockedFunction<
    typeof getArticleDetailData
>;

const mockedArticle = {
    id: '1',
    title: 'Article',
    subtitle: 'Subtitle',
    img: 'image.jpg',
    views: 100,
    createdAt: '2024-01-01',
    type: [ArticleTypes.IT],
    blocks: [],
};

describe('addCommentForArticle', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('успешный запрос', async () => {
        const mockUser = { id: '1', username: 'user' };
        const mockArticle: Article = mockedArticle;
        const mockComment = { id: '1', text: 'comment' };

        mockedGetUserAuthData.mockReturnValue(mockUser);
        mockedGetArticleDetailData.mockReturnValue(mockArticle);
        mockedAxios.post.mockResolvedValue({ data: mockComment });

        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.getState = jest.fn().mockReturnValue({});

        const result = await thunk.callThunk('test comment');

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('ошибка при отсутствии пользователя', async () => {
        mockedGetUserAuthData.mockReturnValue(undefined);
        mockedGetArticleDetailData.mockReturnValue(mockedArticle);

        const thunk = new TestAsyncThunk(addCommentForArticle);

        const result = await thunk.callThunk('test comment');

        expect(mockedAxios.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
