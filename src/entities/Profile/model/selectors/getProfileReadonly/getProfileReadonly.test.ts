import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('should return loading status', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {
                    first: 'Raman',
                    lastname: 'Miranivich',
                    age: 19,
                    currency: Currency.BYN,
                    country: Country.Belarus,
                    city: 'Minsk',
                    username: 'hisone',
                },
                error: 'error',
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });
});
