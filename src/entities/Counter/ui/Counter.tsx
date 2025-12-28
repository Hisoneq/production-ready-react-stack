import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { getCounterValue } from '../model/selectors/getCouter/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

/* eslint-disable i18next/no-literal-string */
export function Counter() {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <Button onClick={increment} data-testid="inc-button">
                increment
            </Button>
            <Button onClick={decrement} data-testid="dec-button">
                decrement
            </Button>
        </div>
    );
}
