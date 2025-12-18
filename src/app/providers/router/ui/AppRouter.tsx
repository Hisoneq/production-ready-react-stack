import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export default function AppRouter(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => {
                    return <Route
                        key={path}
                        path={path}
                        element={(
                            <div className='page-wrapper'>{element}</div>
                        )}
                    />;
                })}
            </Routes>
        </Suspense>
    );
}