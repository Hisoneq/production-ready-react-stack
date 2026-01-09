import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

type ActionCreatorType<Return, Arg, RejectValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

export class TestAsyncThunk<Return, Arg, RejectValue> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);

        const extra = {
            api: mockedAxios,
            navigate: jest.fn(),
        };

        const res = await action(this.dispatch, this.getState, extra);

        return res;
    }
}
