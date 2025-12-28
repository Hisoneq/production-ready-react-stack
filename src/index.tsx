import App from 'app/App';
import 'app/styles/index.scss';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProvider/ui/themeProvider';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
