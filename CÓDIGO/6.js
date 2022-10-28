//Implemente una funcion curry que tome como argumento cualquier función f y retorne la versión curried de f.
//FUNCIÓN: Sumar c/u de los 3 parámetros 
function abc(a, b, c) {
return a + b + c;
}
function curry (f) {
    return suma = (...args) => {
        if (f.length !== args.length) return suma.bind(null, ...args);
    return f(...args);
    };
}
var curriedAbc = curry(abc);
console.log(curriedAbc(2)(3)(4));
//OUT: 9
console.log(curriedAbc(2, 3)(4));
//OUT: 9 
console.log(curriedAbc(2)(3, 4));
//OUT: 9
console.log(curriedAbc(2, 3, 4));
//OUT: 9