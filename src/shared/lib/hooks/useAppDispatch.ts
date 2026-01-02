import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
