import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'CSS класс для кастомизации',
        },
        data: {
            control: 'object',
            description: 'Данные профиля',
        },
        isLoading: {
            control: 'boolean',
            description: 'Состояние загрузки',
        },
        error: {
            control: 'text',
            description: 'Текст ошибки',
        },
        readonly: {
            control: 'boolean',
            description: 'Режим только для чтения',
        },
        onChangeFirstname: {
            action: 'onChangeFirstname',
            description: 'Callback при изменении имени',
        },
        onChangeLastname: {
            action: 'onChangeLastname',
            description: 'Callback при изменении фамилии',
        },
        onChangeAge: {
            action: 'onChangeAge',
            description: 'Callback при изменении возраста',
        },
        onChangeCity: {
            action: 'onChangeCity',
            description: 'Callback при изменении города',
        },
        onChangeAvatar: {
            action: 'onChangeAvatar',
            description: 'Callback при изменении аватарки',
        },
        onChangeUsername: {
            action: 'onChangeUsername',
            description: 'Callback при изменении никнейма',
        },
        onChangeCurrency: {
            action: 'onChangeCurrency',
            description: 'Callback при изменении валюты',
        },
        onChangeCountry: {
            action: 'onChangeCountry',
            description: 'Callback при изменении страны',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const mockProfileData = {
    username: 'ramanz',
    age: 25,
    country: Country.Belarus,
    currency: Currency.BYN,
    lastname: 'Миранович',
    first: 'Роман',
    city: 'Минск',
    avatar: 'https://avatars.githubusercontent.com/u/1234567?v=4',
};

export const Default: Story = {
    args: {
        data: mockProfileData,
        readonly: true,
    },
};

export const EditingMode: Story = {
    args: {
        data: mockProfileData,
        readonly: false,
    },
};

export const WithoutAvatar: Story = {
    args: {
        data: {
            ...mockProfileData,
            avatar: undefined,
        },
        readonly: true,
    },
};

export const MinimalData: Story = {
    args: {
        data: {
            first: 'Иван',
            lastname: 'Иванов',
            age: 30,
            city: 'Москва',
            country: Country.Russia,
            currency: Currency.RUB,
        },
        readonly: true,
    },
};

export const WithError: Story = {
    args: {
        error: 'Не удалось загрузить данные профиля. Попробуйте обновить страницу.',
        isLoading: false,
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const Empty: Story = {
    args: {
        data: undefined,
        readonly: true,
    },
};

export const EditingWithEmptyFields: Story = {
    args: {
        data: {
            first: '',
            lastname: '',
            age: undefined,
            city: '',
            username: '',
            avatar: '',
            country: Country.Belarus,
            currency: Currency.BYN,
        },
        readonly: false,
    },
};
