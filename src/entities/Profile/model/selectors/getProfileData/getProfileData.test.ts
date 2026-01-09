import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
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
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual({
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
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual({});
    });
});
