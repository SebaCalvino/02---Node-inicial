import {getCountryByAbbreviation, getCurrencyAbbreviation} from 'country-currency-map';
let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = await obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = await obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

async function obtenerMoneda(codigoPais) {
let pais = await getCountryByAbbreviation(codigoPais);
    if (pais != null) {
        return await getCurrencyAbbreviation(pais);
    } else {
        return null;
    }
}