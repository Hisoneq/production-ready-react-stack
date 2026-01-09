import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';
import { profileReducer, ProfileSchema } from '../../../entities/Profile';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [
        (Story, { parameters }) => (
            <StoreProvider
                initialState={parameters.initialState}
                asyncReducers={parameters.asyncReducers}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

const mockProfileData: ProfileSchema = {
    form: {
        username: 'ramanz',
        age: 25,
        country: Country.Belarus,
        currency: Currency.BYN,
        lastname: 'Миранович',
        first: 'Роман',
        city: 'Минск',
        avatar: 'https://example.com/avatar.jpg',
    },
    data: {
        username: 'ramanz',
        age: 25,
        country: Country.Belarus,
        currency: Currency.BYN,
        lastname: 'Миранович',
        first: 'Роман',
        city: 'Минск',
        avatar: 'https://example.com/avatar.jpg',
    },
    readonly: true,
    isLoading: false,
    error: undefined,
};

export const Default: Story = {
    parameters: {
        initialState: {
            profile: mockProfileData,
        },
        asyncReducers: {
            profile: profileReducer,
        },
    },
};

export const Loading: Story = {
    parameters: {
        initialState: {
            profile: {
                form: undefined,
                data: undefined,
                readonly: true,
                isLoading: true,
                error: undefined,
            },
        },
        asyncReducers: {
            profile: profileReducer,
        },
    },
};

export const Error: Story = {
    parameters: {
        initialState: {
            profile: {
                form: undefined,
                data: undefined,
                readonly: true,
                isLoading: false,
                error: 'Не удалось загрузить профиль',
            },
        },
        asyncReducers: {
            profile: profileReducer,
        },
    },
};
