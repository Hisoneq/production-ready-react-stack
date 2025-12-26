import { fireEvent, screen } from '@testing-library/react';
import { ComponentsRender } from '../../../../shared/config/tests/componentsRender/componentsRender';
import { SideBar } from './SideBar';

describe('sidebar', () => {
    test('Render', () => {
        ComponentsRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Toggle Sidebar', () => {
        ComponentsRender(<SideBar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toHaveClass('isOpen');
        const toggleBtn = screen.getByTestId('toggleButton');
        fireEvent.click(toggleBtn);
        expect(sidebar).not.toHaveClass('isOpen');
    });
});
