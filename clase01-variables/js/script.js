// Javascript es un lenguaje no tipado 
// todo puede cambiar un string puede ser despues un number

//variables y datos
//camelCase
// operador logico de = asigno un dato a la variable

let firstname = "Ana Laura"  //string  (cadena de texto)
let lastname = "Flores"
let birthdayYear = 1980 //number - interger(numeros enteros)
let PI = 3.1416  // number - float (con puntos no comas)
let knowHowToDrive = false // boolean 
let hasPet = true // boolean
let willDinner  // undefined
let dailyMates = "3" // string
// let age = 42 




console.log(firstname)
console.log(lastname)
console.log(birthdayYear)
console.log(willDinner)

//operadores de concatenacion
console.log(firstname + ' ' + lastname)
// console.log ("Hola mi nombre es " + firstname + ' ' + lastname + ' ' + "y tengo " + age + ' ' +"años")

// sugar syntax
//backstick

// console.log(`Hola mi nombre es ${firstname} ${lastname} y tengo ${age} años.`)

//puedo tambien definir una variable
// template strings // template literals

// let presentation = (`Hola mi nombre es ${firstname} ${lastname} y tengo ${age} años.`)


//typeof nos sirve para saber que tipo de dato es una variable

console.log(typeof firstname)
console.log(typeof dailyMates)
console.log(typeof PI)
console.log (typeof knowHowToDrive)
console.log (typeof willDinner)

console.log (typeof presentation)

console.log(firstname)
firstname ="Serena"
console.log(firstname)

willDinner = true

//OPERADORES ARITMETICOS
// + suma
// - resta
// * multiplicacion o producto
// / division
// % modulo (resto de la division)

let number1 = 10
let number2 = 5

console.log (number1 + number2)

let resta = number1 - number2
console.log ("Resta:", resta)
console.log ("Producto:", number1*number2)
console.log ("División:",number1/number2)
console.log ("Modulo:",number1%number2)

// variables const

const placeOfBirth = "CABA, Buenos Aires, Argentina"



//alert("No podes ver este contenido")

const age = prompt("ingrese su edad:", 0)
console.log (typeof age)