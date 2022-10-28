//Implemente una función delayInvoc que en cada invocacion incremente la variable total con el
//valor enviado como parametro.
let total = 0;
//FUNCIÓN: Sumar valores y pasar al siguiente valor hasta llegar al vacío
function delayInvoc(...args) {
    let result= args.reduce((r,v)=> r+v);

    const sum = (...innerargs)=>{
        if (innerargs.length === 0) return result;
        return delayInvoc(...args, ...innerargs)
    }
    return sum;
};
//AVISO: LOS PRINT FINALIZAN UNA VEZ ENCUENTREN EL VACÍO: ()
let total1 = delayInvoc(4)(5)();
console.log (total1); //9
//OUT de 4+5: 9
total1 = delayInvoc(4)(5)(8)();
console.log (total1);
//OUT de 4+5+8: 17