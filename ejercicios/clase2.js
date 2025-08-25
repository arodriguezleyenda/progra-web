//EJERCICIO 1
console.log("\nEJERCICIO 1")
//fechaDeNacimiento = 12 ReferenceError: Cannot access 'fechaDeNacimiento' before initialization at Object.<anonymous> 
const ciudad = "Bariloche"
let pais = "Argentina"
let fechaDeNacimiento = "21-10-2003"

console.log(ciudad,",",pais,",",fechaDeNacimiento)

//ciudad = "mendoza"
//console.log(ciudad)
pais="Brasil"
console.log(pais) //let permite cambiar la variable pero va en orden, tengo que volver a imprimirla para ver el cambio

//¿? Porque aparece ese error cuando intento definir fechaDeNacimeinto antes? 

//EJERCICIO 2
console.log("\nEJERCICIO 2")
x=2
y=3
z=8

promedio = (x+y+z)/3
residuo = (x+y+z)%3
console.log(promedio)
console.log(residuo)


//EJERCICIO 3 - OBJETO
console.log("\nEJERCICIO 3")

const auto = {marca:"Toyota", modelo:"Corolla", año:2013}
//console.log(typeof(auto[0])) //esto funciona para array, los objetos no tienen indice numérico
console.log(typeof(auto.marca))
console.log(typeof(auto.modelo))
console.log(typeof(auto.año))

//Para un array:
//const car = ["Toyota","Corolla",2013]
//console.log(typeof(car[2]))


//EJERCICIO 4
console.log("\nEJERCICIO 4")

const ciudades = ["París", "Roma", "Tokio", "Miami","Colonia"]

ciudades[2]="Barcelona"
console.log(ciudades)

//¿? Entonces donde esta la diferencia entre let y const? Solo en cambiar el tipo de dato?


//EJERCICIO 5 - ARRAY DE OBJETOS
console.log("\nEJERCICIO 5")

//pelicula1 = {titulo:"titanic", director:"James Cameron",año:1997}
//pelicula2 = {titulo:"The Fast and the Furious", director:"Rob Cohen",año:2001}
//pelicula3 = {titulo:"Grown ups", director:"Dennis Dugan",año:2010}

//const tv = [pelicula1,pelicula2,pelicula3]
//console.log(tv[2].director)

//otra forma:
const tv = [
    {titulo:"titanic", director:"James Cameron",año:1997},
    {titulo:"The Fast and the Furious", director:"Rob Cohen",año:2001},
    {titulo:"Grown ups", director:"Dennis Dugan",año:2010},
]
console.log(tv[2].director)


//EJERCICIO 6 
console.log("\nEJERCICIO 6")

const perro = true
const gato = false
const silla = true

console.log(perro&&gato)
console.log(perro||gato)
console.log(perro&&silla)


//EJERCICIO 8
console.log("\nEJERCICIO 8")

const nombre = "Agustina"
const apellido = "Leyenda"
const completo = nombre +" "+ apellido 
console.log(completo)

//¿? los espacios entre strings se ponen asi o hay otra forma? 


//EJERCICIO 9
console.log("\nEJERCICIO 9")

x=7
console.log("variable:",x)
x++
console.log("incremento:",x)
x++
console.log("incremento",x)
x--
console.log("decremento:",x)


//EJERCICIO 13
console.log("\nEJERCICIO 13")

let u;
let v = null
console.log(typeof(u))
console.log(typeof(v))


//EJERCICIO 14
console.log("\nEJERCICIO 14")

numero = "123"
console.log(numero + 1)

numero = Number(numero)
console.log(numero + 1)