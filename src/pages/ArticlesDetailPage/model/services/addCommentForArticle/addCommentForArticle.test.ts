import axios from 'axios';
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

const mockedGetUserAuthData = getUserAuthData as jest.MockedFunction<typeof getUserAuthData>;
const mockedGetArticleDetailData = getArticleDetailData as jest.MockedFunction<
    typeof getArticleDetailData
>;

const mockArticle = {
    id: '1',
    title: 'Article',
    subtitle: 'Subtitle',
    img: 'image.jpg',
    views: 100,
    createdAt: '2024-01-01',
    type: [ArticleTypes.IT],
    blocks: [],
    user: { id: '1', username: 'author' },
};

describe('addCommentForArticle', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('успешный запрос', async () => {
        const mockUser = { id: '1', username: 'user' };
        const mockComment = { id: '1', text: 'comment' };

        mockedGetUserAuthData.mockReturnValue(mockUser);
        mockedGetArticleDetailData.mockReturnValue(mockArticle);
        mockedAxios.post.mockResolvedValue({ data: mockComment });

        const thunk = new TestAsyncThunk(addCommentForArticle);

        const result = await thunk.callThunk('test comment');

        expect(mockedAxios.post).toHaveBeenCalledWith('/comments', {
            articleId: '1',
            userId: '1',
            text: 'test comment',
        });
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockComment);
    });

    test('ошибка при отсутствии пользователя', async () => {
        mockedGetUserAuthData.mockReturnValue(undefined);
        mockedGetArticleDetailData.mockReturnValue(mockArticle);

        const thunk = new TestAsyncThunk(addCommentForArticle);

        const result = await thunk.callThunk('test comment');

        expect(mockedAxios.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('no data or unauthorized');
    });

    test('ошибка при отсутствии статьи', async () => {
        const mockUser = { id: '1', username: 'user' };

        mockedGetUserAuthData.mockReturnValue(mockUser);
        mockedGetArticleDetailData.mockReturnValue(undefined);

        const thunk = new TestAsyncThunk(addCommentForArticle);

        const result = await thunk.callThunk('test comment');

        expect(mockedAxios.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('no data or unauthorized');
    });

    test('ошибка при пустом тексте комментария', async () => {
        const mockUser = { id: '1', username: 'user' };

        mockedGetUserAuthData.mockReturnValue(mockUser);
        mockedGetArticleDetailData.mockReturnValue(mockArticle);

        const thunk = new TestAsyncThunk(addCommentForArticle);

        const result = await thunk.callThunk('');

        expect(mockedAxios.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('no data or unauthorized');
    });

    test('ошибка при запросе на сервер', async () => {
        const mockUser = { id: '1', username: 'user' };

        mockedGetUserAuthData.mockReturnValue(mockUser);
        mockedGetArticleDetailData.mockReturnValue(mockArticle);
        mockedAxios.post.mockRejectedValue(new Error('Network Error'));

        const thunk = new TestAsyncThunk(addCommentForArticle);

        const result = await thunk.callThunk('test comment');

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Вы ввели неправильный логин или пароль');
    });
});
