let miUrl    = null;

let miObjeto = null;

miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

miObjeto = parsearUrl (miUrl);

console.log(miObjeto);


function parsearUrl(laURL){
    let urlParseada = new URL(laURL);

    let resultado = {
        host: urlParseada.host,
        pathname: urlParseada.pathname,
        parametros: urlParseada.searchParams,
    };
    return resultado;
}