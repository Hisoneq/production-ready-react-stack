import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button', () => {
    test('is visible', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
