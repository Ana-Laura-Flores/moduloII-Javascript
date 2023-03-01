//EJERCICIO 1
let user="Ana Laura"
let age = "42"
let email ="anadisenio@hotmail.com"

console.log ("Ejercicio 1")
console.log (user)
console.log (age)
console.log (email)

console.log (user + " " + age + " " + email)
console.log (`${user} ${age} ${email}`)
console.log (typeof user)
console.log (typeof age)
console.log (typeof email)

//EJERCICIO 2

// console.log("Ejercicio 2")
// const name = prompt("ingrese su nombre")
// const ageUser = prompt("ingrese su edad")
// const emailUser = prompt("ingrese su email")

// console.log (`${name} ${ageUser} ${emailUser}`)
// console.log ("la suma es:", parseInt(ageUser)+10)

//EJERCICIO 3
// console.log("Ejercicio 3")
// console.log (`Usted ingreso su nombre:${user}`)
// document.write(`Usted ingreso su nombre: ${user} su edad que es ${age} y tiene como contacto su email ${email}` )
// alert (`Mi nombre es ${user} tengo ${age} años y mi mail es ${email}`)

//Ejercicio 4
const number1 = parseInt (prompt("ingrese un numero entero", 0))
const number2 = parseInt (prompt ("ingrese otro numero entero", 0))

let suma = parseInt(number1) + parseInt(number2)
let multiplicacion = number1 * number2
let divi = number1 / number2

document.write("El resultado de la suma es", suma)
document.write("El resultado de la multiplicacion es"+ " ",multiplicacion )
document.write("El resultado de la división es"+ " ", divi )
document.write("El resultado de la resta es"+ " ", number1 - number2)

//Ejercicio 5
console.log("Ejercicio 5")

console.log ("El resultado de la suma de 3 numeros es", parseInt(suma)+10)
console.log ("El resultado de la multipliacion + 10 es", multiplicacion+10)
console.log ("El resultado de la division + 10 es ", divi + 10)