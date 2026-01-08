import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
        },
        src: {
            control: 'text',
        },
        size: {
            control: 'text',
        },
        alt: {
            constrol: 'text',
        },
    },
    args: {
        src: 'https://img.myloview.com/posters/it-support-icon-vector-person-with-laptop-computer-male-user-person-profile-avatar-globe-symbol-for-working-online-in-a-flat-color-glyph-pictogram-illustration-700-227645428.jpg',
        size: 50,
        alt: 'Temp',
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {},
};

export const WithoutSize: Story = {
    args: {
        size: undefined,
    },
};
