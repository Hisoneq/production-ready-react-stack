import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '../model/types/Country';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'CSS класс для кастомизации',
        },
        value: {
            control: 'select',
            options: Object.values(Country),
            description: 'Текущая выбранная валюта',
        },
        onChange: {
            action: 'onChange',
            description: 'Callback при изменении валюты',
        },
    },
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
    args: {
        value: Country.Belarus,
    },
};

export const WithoutValue: Story = {
    args: {
        value: undefined,
    },
};
