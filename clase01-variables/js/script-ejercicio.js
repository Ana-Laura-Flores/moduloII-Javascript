const name = prompt ("ingrese su nombre:")
const age = prompt ("ingrese su edad:", 0)
const birthday =prompt ("ingrese su nacimiento:", "dd-mm-aaaa")

console.log(`Usted ingresó su nombre: ${name} `)
console.log(`Usted ingresó su edad: ${age} `)
console.log(`Usted ingresó su año de nacimiento: ${birthday} `)

const num1 =prompt("ingrese el primer número", 0)
const num2 =prompt("ingrese el segundo número", 0)


//parseInt ()
// una función nativa de javascript que nos permite transformar de un string a un numero entero  // trunca el numero si lo pones con coma
console.log("la suma es:", parseInt(num1) + parseInt(num2))
console.log("la resta es:", num1 - num2)
console.log("la multiplicacion es:", num1 * num2)








