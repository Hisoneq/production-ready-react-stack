import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return all data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
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
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });

    test('should return undef', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {},
                error: undefined,
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
