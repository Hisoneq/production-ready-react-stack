import { Reducer } from '@reduxjs/toolkit';
import { StoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    children: ReactNode;
    name: StateSchemaKey;
    reducers: ReducersList;
    removeAfterAmount?: boolean;
}

export function DynamicModuleLoader({
    children,
    reducers,
    removeAfterAmount = true,
}: DynamicModuleLoaderProps) {
    const store = useStore() as StoreWithManager;

    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@@INIT ${name} ` });
        });
        return () => {
            if (removeAfterAmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@@DESTOUR ${name} ` });
                });
            }
        };
    }, []);

    return <> {children} </>;
}
