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

