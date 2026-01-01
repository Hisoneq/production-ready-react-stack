import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from '../../model/slice/loginSlice';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    decorators: [
        (Story, { parameters }) => {
            const initialState: DeepPartial<StateSchema> = parameters.initialState || {
                loginForm: {
                    username: '',
                    password: '',
                    isLoading: false,
                    error: undefined,
                },
            };

            const asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
                loginForm: loginReducer,
            };

            return (
                <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                    <Story />
                </StoreProvider>
            );
        },
    ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
    args: {},
};

export const WithError: Story = {
    args: {},
    parameters: {
        initialState: {
            loginForm: {
                username: 'test',
                password: '123',
                isLoading: false,
                error: 'Неверный логин или пароль',
            },
        },
    },
};

export const Loading: Story = {
    args: {},
    parameters: {
        initialState: {
            loginForm: {
                username: 'test',
                password: '123',
                isLoading: true,
                error: undefined,
            },
        },
    },
};
