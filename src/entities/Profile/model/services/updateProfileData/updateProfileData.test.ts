import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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

const mockState: DeepPartial<StateSchema> = {
    profile: {
        form: mockProfileData,
        data: mockProfileData,
        readonly: true,
        isLoading: false,
        error: undefined,
    },
    counter: { value: 0 },
    user: { authData: undefined },
};

describe('updateProfileData', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('success', async () => {
        mockedAxios.put.mockResolvedValue({ data: mockProfileData });

        const dispatch = jest.fn();
        const getState = jest.fn(() => mockState as StateSchema);
        const extra = {
            api: mockedAxios,
            navigate: jest.fn(),
        };

        const action = updateProfileData();
        const result = await action(dispatch, getState, extra);

        expect(mockedAxios.put).toHaveBeenCalledWith('/profile', mockProfileData);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfileData);
    });

    test('error', async () => {
        mockedAxios.put.mockRejectedValue(new Error('API Error'));

        const dispatch = jest.fn();
        const getState = jest.fn(() => mockState as StateSchema);
        const extra = {
            api: mockedAxios,
            navigate: jest.fn(),
        };

        const action = updateProfileData();
        const result = await action(dispatch, getState, extra);

        expect(mockedAxios.put).toHaveBeenCalledWith('/profile', mockProfileData);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибочка');
    });
});
