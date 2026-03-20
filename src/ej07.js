import { getCountry } from 'currency-map-country';
import { getCurrency } from 'currency-map-country';
let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
let pais = getCountry(codigoPais);
    if (pais) {
        return getCurrency(pais);
    } else {
        return null;
    }
}