import data from '../mocks/data.json';

export const getCountryByName = (countryName: string) => {
    return data.find( country => country.name === countryName);
}
