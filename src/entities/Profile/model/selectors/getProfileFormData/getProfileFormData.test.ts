import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData', () => {
    test('should return all data', () => {
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
        expect(getProfileFormData(state as StateSchema)).toEqual({
            first: 'Raman',
            lastname: 'Miranivich',
            age: 19,
            currency: Currency.BYN,
            country: Country.Belarus,
            city: 'Minsk',
            username: 'hisone',
        });
    });

    test('should return empty obj', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {},
                form: {},
                error: undefined,
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileFormData(state as StateSchema)).toEqual({});
    });
});
