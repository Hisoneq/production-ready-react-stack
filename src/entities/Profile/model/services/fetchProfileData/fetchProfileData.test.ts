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
    let thunk: TestAsyncThunk<Profile, void, string>;

    beforeEach(() => {
        thunk = new TestAsyncThunk(fetchProfileData);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('success', async () => {
        mockedAxios.get.mockResolvedValue({ data: mockProfileData });

        const result = await thunk.callThunk();

        expect(mockedAxios.get).toHaveBeenCalledWith('/profile');

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfileData);
    });

    test('error', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Network Error'));

        const result = await thunk.callThunk();

        expect(mockedAxios.get).toHaveBeenCalledWith('/profile');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибочка');
    });
});
