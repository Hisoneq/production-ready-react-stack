import { lazy } from 'react';

export const MainPageAsync = lazy(() => import('./MainPage'));

export default MainPageAsync;