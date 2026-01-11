import { StateSchema } from 'app/providers/StoreProvider';

export const getUserInited = (state: StateSchema) => {
    return state.user._inited;
};
