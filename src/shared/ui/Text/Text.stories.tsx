import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'title',
        },
        description: {
            control: 'text',
            description: 'description',
        },
        theme: {
            control: 'select',
            options: [TextTheme.PRIMARY, TextTheme.ERROR],
        },
    },
    args: {
        title: 'Template title',
        description: 'Template description',
        size: TextSize.M,
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {},
};

export const onlyTitle: Story = {
    args: {
        title: 'Temp Temp Temp Temp Temp',
        description: undefined,
    },
};

export const onlyDescription: Story = {
    args: {
        title: undefined,
        description: 'Temp Temp Temp Temp',
    },
};

export const ErrorTheme: Story = {
    args: {
        title: 'Error Title',
        description: 'Error Description',
        theme: TextTheme.ERROR,
    },
};

export const ErrorOnlyTitle: Story = {
    args: {
        title: 'Error Title',
        description: undefined,
        theme: TextTheme.ERROR,
    },
};

export const ErrorOnlyDescription: Story = {
    args: {
        title: undefined,
        description: 'Error Description',
        theme: TextTheme.ERROR,
    },
};

export const LargeSize: Story = {
    args: {
        title: 'Title',
        description: 'Description',
        size: TextSize.L,
    },
};
