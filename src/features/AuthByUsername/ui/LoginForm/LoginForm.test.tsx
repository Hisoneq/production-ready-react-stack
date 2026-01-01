import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentsRender } from 'shared/config/tests/componentsRender/componentsRender';
import { loginReducer } from '../../model/slice/loginSlice';
import LoginForm from './LoginForm';

const asyncReducers = {
    loginForm: loginReducer,
};

describe('LoginForm', () => {
    test('Rendering form', () => {
        ComponentsRender(<LoginForm />, { asyncReducers });

        expect(screen.getByTestId('login-form')).toBeInTheDocument();
        expect(screen.getByText('Форма авторизации')).toBeInTheDocument();
        expect(screen.getByTestId('username-input')).toBeInTheDocument();
        expect(screen.getByTestId('password-input')).toBeInTheDocument();
        expect(screen.getByTestId('login-button')).toBeInTheDocument();
    });

    test('Show error', () => {
        ComponentsRender(<LoginForm />, {
            initialState: {
                loginForm: {
                    username: '',
                    password: '',
                    isLoading: false,
                    error: 'Ошибка',
                },
            },
            asyncReducers,
        });

        expect(screen.getByText(/неправильный логин или пароль/i)).toBeInTheDocument();
    });

    test('Disable button when api loading', () => {
        ComponentsRender(<LoginForm />, {
            initialState: {
                loginForm: {
                    username: '',
                    password: '',
                    isLoading: true,
                    error: undefined,
                },
            },
            asyncReducers,
        });

        expect(screen.getByTestId('login-button')).toBeDisabled();
    });

    test('Enter usernamr and password', async () => {
        ComponentsRender(<LoginForm />, { asyncReducers });
        const user = userEvent.setup();

        const usernameInput = screen.getByTestId('username-input');
        const passwordInput = screen.getByTestId('password-input');

        await user.type(usernameInput, 'user123');
        await user.type(passwordInput, 'password123');

        expect(usernameInput).toHaveValue('user123');
        expect(passwordInput).toHaveValue('password123');
    });

    test('Login button', async () => {
        ComponentsRender(<LoginForm />, { asyncReducers });
        const user = userEvent.setup();

        const loginButton = screen.getByTestId('login-button');

        await user.click(loginButton);

        expect(loginButton).toBeInTheDocument();
    });
});
