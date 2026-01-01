import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
        },
    },
};

export const decorators = [
    (Story, context) => {
        const theme = context.globals.theme || Theme.DARK;

        return (
            <BrowserRouter>
                <div className={`app ${theme}`} style={{ padding: '20px' }}>
                    <Suspense fallback={<div>Loading translations...</div>}>
                        <Story />
                    </Suspense>
                </div>
            </BrowserRouter>
        );
    },
];

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: Theme.DARK,
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: Theme.LIGHT, title: 'Light' },
                { value: Theme.DARK, title: 'Dark' },
            ],
            showName: true,
        },
    },
};
