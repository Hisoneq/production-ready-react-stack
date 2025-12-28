import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Открыто ли модальное окно',
        },
        onClose: {
            action: 'closed',
            description: 'Функция, вызываемая при закрытии',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        isOpen: true,
        children: 'Простой текст в модалке',
    },
};

export const LargeContent: Story = {
    args: {
        isOpen: true,
        children: (
            <div>
                <h2>Заголовок</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        ),
    },
};

// Модалка в закрытом состоянии
export const Closed: Story = {
    args: {
        isOpen: false,
        children: 'Эта модалка не видна',
    },
};

// Модалка с кнопками
export const WithButtons: Story = {
    args: {
        isOpen: true,
        children: (
            <div>
                <p>Модалка с кнопками</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                    <button style={{ padding: '8px 16px' }}>ОК</button>
                    <button style={{ padding: '8px 16px' }}>Отмена</button>
                </div>
            </div>
        ),
    },
};
