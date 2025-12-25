import 'app/styles/index.scss';

export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
        },
    },
};

export const decorators = [
    (Story) => (
        <div className="app" style={{ padding: '20px' }}>
            <Story />
        </div>
    ),
];
