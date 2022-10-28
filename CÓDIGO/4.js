//Cree una funcion joinWords que una varios parametros de tipo string.
function joinWords(...args){
    //En el siguiente fragmento se determina lo que se busca añadir entre strings 
    //En este caso lo dejamos vacío, debido a que el propio input inserta los espacios: " "
    const result = args.join('');
    const UnirPalabras = (...innerargs)=>{
        if(innerargs.length===0) return result;
        return joinWords(...args, innerargs)
    }
    return UnirPalabras;
}
//AVISO: LOS PRINT FINALIZAN UNA VEZ ENCUENTREN EL VACÍO: ()
result = joinWords ('Hello ') () ;
console .log ( result ); 
//OUT: Hello
result = joinWords ('There ')('is ')('no ')('spoon.') () ;
console .log ( result );
//OUT: There is no spoon.