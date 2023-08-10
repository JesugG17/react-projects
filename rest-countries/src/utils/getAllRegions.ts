import data from '../mocks/data.json';

export const getAllRegions = () => {
    const allRegions = data.map( country => country.region);
    const differentRegions = allRegions.filter( (region, index) => allRegions.indexOf(region) === index);
    differentRegions.unshift('All');
    return differentRegions;
}
