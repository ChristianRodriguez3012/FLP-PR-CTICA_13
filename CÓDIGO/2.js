//Ejemplo en Currying: RESTA
let restaCurrying = (a) =>{
    return (b) =>{
        return a - b;
    }
}
console.log(restaCurrying())
//OUT: Currying de RESTA

//Ejemplo en Partial Aplication: RESTA
function restaPartial(a, b) {  
    return a - b;  
}  
let rest = restaPartial; 
console.log(restaPartial(30,12))
//OUT: 18