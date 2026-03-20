let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida= "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
    let revertir = texto1 + texto2;
    let revertido = "";
    for(i = revertir.length; i >= 0; i--){
        revertido += revertir.charAt(i);
    }
    let returnValue = revertido;
    return returnValue;
}