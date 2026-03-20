/* Este es el módulo "matematicas" */

const PI = 3.14;
function sumar(x, y){
    return x + y;
};

const multiplicar = (a, b) => { 
    return a * b;
};

function restar(x, y){
    return x - y;
}

const dividir = (a, b) => {
    return a / b;
};

const array = ["dos", "cuatro", "ocho", "diez"];

export {PI, sumar, multiplicar, restar, dividir, array};