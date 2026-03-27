import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'


let resultado = null;

// Test de la función OMDBSearchByPage..

resultado  = await OMDBSearchByPage("cars", 1);

console.log("OMDBSearchByPage", resultado);