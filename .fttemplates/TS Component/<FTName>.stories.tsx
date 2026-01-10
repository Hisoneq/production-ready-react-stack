import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { <FTName> } from './<FTName>';

const meta: Meta<typeof <FTName>> = {
    title: 'urFolder/<FTName>',
    component: <FTName>,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Дополнительный CSS класс',
        },
    },
    args: {}
};

export default meta;
type Story = StoryObj<typeof <FTName>>;

export const Default: Story = {
    args: {},
};