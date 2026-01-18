import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import AddNewComment from './AddNewComment';

const meta: Meta<typeof AddNewComment> = {
    title: 'features/AddNewComment',
    component: AddNewComment,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
        handelSendComment: {
            action: 'Комментарий отправлен',
            description: 'Функция отправки комментария',
        },
    },
    args: {
        handelSendComment: (text) => console.log('Отправлен комментарий:', text),
    },
};

export default meta;
type Story = StoryObj<typeof AddNewComment>;

export const Default: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            initialState: {
                addNewComment: {
                    text: '',
                },
            },
        }),
    ],
};

export const WithText: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            initialState: {
                addNewComment: {
                    text: 'Пример текста комментария',
                },
            },
        }),
    ],
};

export const WithLongText: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            initialState: {
                addNewComment: {
                    text: 'Это очень длинный текст комментария, который занимает несколько строк и демонстрирует как компонент обрабатывает длинный ввод пользователя',
                },
            },
        }),
    ],
};
