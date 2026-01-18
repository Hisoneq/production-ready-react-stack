import axios from 'axios';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { Profile } from '../../types/Profile';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

const mockProfileData = {
    username: 'testuser',
    age: 25,
    country: Country.Belarus,
    currency: Currency.BYN,
    lastname: 'Тестов',
    first: 'Тест',
    city: 'Минск',
    avatar: 'https://example.com/avatar.jpg',
};

describe('fetchProfileData', () => {
    let thunk: TestAsyncThunk<Profile, string | undefined, string>;

    beforeEach(() => {
        thunk = new TestAsyncThunk(fetchProfileData);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('success', async () => {
        mockedAxios.get.mockResolvedValue({ data: mockProfileData });

        const result = await thunk.callThunk('1');

        expect(mockedAxios.get).toHaveBeenCalledWith('/profile/1');

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfileData);
    });

    test('error', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Network Error'));

        const result = await thunk.callThunk('1');

        expect(mockedAxios.get).toHaveBeenCalledWith('/profile/1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибочка');
    });

    test('undefined', async () => {
        const result = await thunk.callThunk(undefined);

        expect(mockedAxios.get).not.toHaveBeenCalled();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Не указан id');
    });
});
