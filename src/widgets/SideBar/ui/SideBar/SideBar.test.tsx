import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/helpers/tests/renderWithTranslation';
import { SideBar } from './SideBar';

describe('sidebar', () => {
    test('Render', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Toggle Sidebar', () => {
        renderWithTranslation(<SideBar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toHaveClass('isOpen');
        const toggleBtn = screen.getByTestId('toggleButton');
        fireEvent.click(toggleBtn);
        expect(sidebar).not.toHaveClass('isOpen');
    });
});
