import { ThunkExtraArg } from 'app/providers/StoreProvider';
import axios from 'axios';
import { User } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const localStorageMock = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('loginByUsername', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    const mockExtra: ThunkExtraArg = {
        api: mockedAxios,
        navigate: jest.fn(),
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('успешный логин', async () => {
        const userData: User = { id: '1', username: 'test' };
        const authData = { username: 'test', password: '123' };

        mockedAxios.post.mockResolvedValue({ data: userData });

        const action = loginByUsername(authData);
        const result = await action(dispatch, getState, mockExtra);

        expect(mockedAxios.post).toHaveBeenCalledWith('/login', authData);

        expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(userData));

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('ошибка логина', async () => {
        const authData = { username: 'wrong', password: 'wrong' };

        mockedAxios.post.mockRejectedValue(new Error('Ошибка'));

        const action = loginByUsername(authData);
        const result = await action(dispatch, getState, mockExtra);

        expect(mockedAxios.post).toHaveBeenCalled();

        expect(localStorage.setItem).not.toHaveBeenCalled();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Вы ввели неправильный логин или пароль');
    });
});
