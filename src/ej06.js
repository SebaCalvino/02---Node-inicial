let miUrl    = null;

let miObjeto = null;

miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

miObjeto = parsearUrl (miUrl);

console.log(miObjeto);


function parsearUrl(laURL){
    let resultado = null;
    try {
        let urlParseada = new URL(laURL);
        resultado = {
        host: urlParseada.host,
        pathname: urlParseada.pathname,
        parametros: urlParseada.searchParams,
    };
    } catch (error) {
        console.error("Error al parsear la URL:", error);
        resultado = {
            host: null,
            pathname: null,
            parametros: null,
        };
    }
    return resultado;
}