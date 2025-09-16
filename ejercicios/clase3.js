//EJERCICIO 1
console.log("EJERCICIO 1")

function funcion (p1, p2, p3) {
    return Math.max (p1,p2,p3)
}

console.log(funcion(1,2,3))
console.log(funcion(-2,-8,-9))
console.log(funcion(2.1,2.12,2.22))


//EJERCICIO 2
console.log("\nEJERCICIO 2")

nombre = ["Valentina", "Camila","Agustina"]
function concatenar (array){
    return array[0]+array[1]+array[2]
}
console.log(concatenar(nombre))

//¿? Cual es la diferencia entre una función declarada y una expresada


//EJERCICIO 3
console.log("\nEJERCICIO 3")

let palabras = []
let unir = (array) => array[0]+array[1]+array[2]

if  (palabras.length === 0){
    console.warn ("El array esta vacío")
}else{
    console.log(unir(palabras))
}


//EJERCICIO 4
console.log("\nEJERCICIO 4")

let temperatura = 18

if (temperatura <= 15){
    console.log("Frío")
    } else if (temperatura <= 25){
        console.log("Tempaldo")
    }
    else {
        console.log("Calor")
    }


//EJERCICIO 5
console.log("\nEJERCICIO 5")

let hora = 2

let saludo = (hora>24)? console.log("El valor no corresponde a una hora del día") 
    :(hora<12)? console.log("Buenos días")
    :(hora<=18)? console.log("Buenas tardes")
    :console.log("Buenas noches")


//EJERCICIO 6
console.log("\nEJERCICIO 6")

function operadores (a, b, c, d){ 
    if ((a || b) && (c||d)){
        return "TRUE"
    }
    else{
        return "FALSE"
    }
}
console.log(operadores(true,true,true,false))

//¿¿??


//EJERCICIO 7
console.log("\nEJERCICIO 7")

function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado* i;  
  }
  return resultado;
}

console.log(factorial(0))

//¿¿??


//EJERCICIO 8
console.log("\nEJERCICIO 8")

function saludar (nombre){
    if (nombre === undefined){
        nombre = "invitado"
    }
    return "Hola, " + nombre
}

console.log(saludar("Agus"))
console.log(saludar())


//EJERCICIO 9
console.log("\nEJERCICIO 9")

a=2
let parImpar = (a) => (a%2==0)? "Par":"Impar"
console.log(parImpar(9))

//¿¿??


//EJERCICIO 10
console.log("\nEJERCICIO 10")

dia = 3
switch (dia){
    case 0 :
        console.log("Domingo")
    break;
    case 1 : 
        console.log("Lunes")
    break;
    case 2 :
        console.log("Martes")
    break;
    case 3 :
        console.log("Miercoles")
    break;
    case 4 :
        console.log("Jueves")
    break;
    case 5 :
        console.log("Viernes")
    break;
    case 6 :
        console.log("Sábado")
    break;
//¿? No entiendo para que es ni como funciona (new Date().getDay())
}


//EJERCICIO 11
console.log("\nEJERCICIO 11")

function suma(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + suma(n - 1);
    }
}
 console.log (suma(4))
 //¿? suma (n-1)?


//EJERCICIO 12
console.log("\nEJERCICIO 12") 

function esPasswordValida(p) {
    let largoOk = p.length >= 8;
    let numeroOk = /[0-9]/.test(p);
    let mayusOk = /[A-Z]/.test(p);
    return largoOk && numeroOk && mayusOk;
}

console.log (esPasswordValida("Hola"))
console.log(esPasswordValida("HOLA1234"))


//EJERCICIO 13
console.log("\nEJERCICIO 13") 

for (let i = 0; i<=20; i++){
    if (i%2==0){
        console.log (i)
    }
}


//EJERCICIO 14
console.log("\nEJERCICIO 14") 

let peliculas = ["El Padrino", "El Rey León", "Cenicienta", "Blanca Nieves", "Jurassic Park"]

for (i=0;i<peliculas.length;i++){
    console.log(i+1+"."+peliculas[i])
}


//EJERCICIO 15
console.log("\nEJERCICIO 15") 

let serie = [1,2,3,4,5,6,7,8,9];

serie.forEach((numero, indice) => {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
});


//EJERCICIO 16
console.log("\nEJERCICIO 16")

