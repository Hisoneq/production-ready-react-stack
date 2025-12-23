import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('sidebar', () => {
    test('Render', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
