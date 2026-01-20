import type { Meta, StoryObj } from '@storybook/react';
import { ArtilceViewSelectors } from './ArtilceViewSelectors';

const meta: Meta<typeof ArtilceViewSelectors> = {
    title: 'urFolder/ArtilceViewSelectors',
    component: ArtilceViewSelectors,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArtilceViewSelectors>;

export const Default: Story = {
    args: {},
};
