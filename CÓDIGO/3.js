//VOL. CILINDRO: CURRYING
let volumenDelCilindro = (r,h) => r*r*h*Math.PI;
console.log(volumenDelCilindro(30,12))
//OUT: 33929.20065876977

//VOL. CILINDRO: "NORMAL"
let VolumenDelCilindroCurrying = (r) =>{
    return (h) =>{
        return r*r*h*Math.PI
    }
}
console.log(VolumenDelCilindroCurrying(12)(30))
//OUT: 13571.680263507906