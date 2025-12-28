import { fireEvent, screen } from '@testing-library/react';
import { ComponentsRender } from 'shared/config/tests/componentsRender/componentsRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Initial title', () => {
        ComponentsRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        ComponentsRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        const incBtn = screen.getByTestId('inc-button');
        fireEvent.click(incBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        ComponentsRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        const decBtn = screen.getByTestId('dec-button');
        fireEvent.click(decBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
