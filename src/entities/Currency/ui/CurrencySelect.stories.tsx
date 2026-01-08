import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from '../model/types/Currency';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'CSS класс для кастомизации',
        },
        value: {
            control: 'select',
            options: Object.values(Currency),
            description: 'Текущая выбранная валюта',
        },
        onChange: {
            action: 'onChange',
            description: 'Callback при изменении валюты',
        },
    },
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Default: Story = {
    args: {
        value: Currency.BYN,
    },
};

export const WithoutValue: Story = {
    args: {
        value: undefined,
    },
};

export const WithUSD: Story = {
    args: {
        value: Currency.USD,
    },
};
