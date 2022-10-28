//Hola Mundo: Firts Class en JavaScript
function decirHolaMundo() {
    return () => {
    console.log("¡Hola Mundo!");
    };
} 

//Suma: Firts Class en JavaScript
function suma(x,y) {  
    return x + y;  
}  
let sum = suma;

//Resta: Firts Class en JavaScript
function resta(x,y) {  
    return x - y;  
}  
let rest = resta;


console.log(decirHolaMundo())
//OUT: FUNCIÓN "DecirHolaMundo"
console.log(suma(30,12))
//OUT: 42
console.log(resta(30,12))
//OUT: 18