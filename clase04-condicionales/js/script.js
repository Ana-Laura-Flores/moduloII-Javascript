// condicionales
// if else - switch

/*
Según una condicion.... pasa esto. sino... pasa lo otro.
*/

// if(condicion){
//     //bloque de codigo que se ejecuta si la condicion se cumple
// }

// let number = 10
// let firstname = "Pilar"

// if (firstname){
//     console.log("Se cumplio la condicion")
// }

// if(number){
//     console.log("Se cumplio la condicion")
// }

// if (number){
//     console.log("caí en el if")
// }
// else{
//     console.log("Caí en el else")
// }

// number=0

// if (number){
//     console.log("caí en el if")
// }
// else{
//     console.log("Caí en el else")
// }

// let boolean =true

// if (boolean){
//     console.log("Me ejecuto")
// }

// let indefinido= undefined

// if(indefinido){
//     console.log("Me ejecuto undefined")
// }

// let nulo =null
// if(nulo){
//     console.log("Me ejecuto")
// }
// else {
//     console.log("No me ejecuto")
// }

// let nan = NaN
// if (nan){
//     console.log("Me ejecuto")
// }
// else {
//     console.log("No me ejecuto")
// }
//Existen ciertos datos que equivalen a true y otros a false
// if(condition){

// }
// else{

// }

//Operadores de comparación


let numero1 = 10
let numero2 = 20
let numeroString = "10"

let mayuscula = "ANA"
let combinaddo = "anA"
/*
== igualdad
=== igualdad estricta
!= ditinto de 
!== distinto estricto
!negacion
*/
/*
console.log(numero1 == numero2)
console.log(numero1 == numeroString)
console.log(numero1 === numeroString)
console.log(mayuscula == combinaddo)
console.log(numero1 != "10")
console.log(numero1 != numero2)
console.log(numero1 != 10)
*/

// console.log(numero1 !== "10")
// console.log(numero1 !== numero2)
// console.log(numero1 !== 10)

/*
console.log(numero1 > numero2)
console.log(numero1 < numero2)
console.log(numero1 >= numero2)
console.log(numero1 <= numero2)

console.log(numero1 <= numeroString)

*/

let string ="Hola"
let stringEmpty = ""
let nulo = null
let indefinido = undefined
let verdadero = true
let falso = false
let positivo = 5
let negativo = -4
let neutro = 0
let noNumero = NaN

console.log (!string) // false
console.log (!stringEmpty) // true


//let nombre =prompt("Ingrese su nombre:")

// if(nombre.toLowerCase() === "pedro"){
//     alert("Hola Pedro!!!!")
// } else{
//     alert ("No se quien sos")
// }


//elseif

// let condicion =true
// let condicion2=false

// if(condition){
//     console.log("cai en if")
// }else if(condition2){
//     console.log("cai en else if")

// }else{
//     // se ejecuta si ninguna se cumple
//     console.log("cai en else")
// }

// let condicion =true
// let nombre =""
// if(condicion){
//     nombre ="Pilar"
    
// }
// console.log(nombre)

// let esElCumple = true
// let edad = 17

// if(esElCumple){
//     edad++
// }
// if(edad>= 18){
//     alert("Podes manejar!!!")
// }

// let nombre

// console.log(nombre)

// let nombre2 =prompt("Ingrese su nombre")

// if (nombre2){
//     console.log(`Hola ${nombre2}`)
// }

// crear un programa que calcule la suma de dos numeros, valide el resultado y retorne verdadero si el resultado es positivo, o retorne falso si el resultado es negativo

const suma = (numero1, numero2)=>{

    const resultado =numero1 + numero2
    if(resultado > 0){
        return true
    }
    else{
        return false
    }

}
console.log (suma(2,4))

const esSumaMayorQueCero = (a, b) => {
    const resultado = a + b 
    if (resultado > 0 ) {
        return true
    } else if (resultado === 0) {
        return "es nulo" 
    } else {
        return false
    }
}

//crear un programa que reciba un numero e identifique si es par o impar

// let numero =4
// console.log(numero%2 === 0)

const esParoImpar =(number) =>{
    if (number %2 === 0){
        return "Es Par"
    }
    else {
        return "Es impar"
    }
}
console.log()
// Crear un programa que reciba un nombre, y si es Pedro que muestre por consola un mensaje de saludo, y si no es pedro que diga "No es Pedro"

const saludarSiEsPedro=(nombre)=>{
    let mensaje = ""
    if (nombre.toLowerCase()=== "pedro"){
        mensaje = "Hola Pedro, como estás?"
    } else{
        mensaje = "No sos  Pedro, mentiroso"
    }
    return mensaje
}

// Crear un programa que reciba una contraseña y valide si su longitud es mayor o igual a 8 caracteres. Si no es mayor, solicitar que ingrese de nuevo la contraseña

// Recursividad => volver a ejecutar una funcion dentro de si misma

// const passwordUser=prompt("ingrese su contraseña")
// const validarPassword = (password) =>{
//     if (password.length >=8){
//         return true
//     } else {
//         password = prompt("ingrese su contraseña:")
//         validarPassword(password)
//     }

// }
// validarPassword(passwordUser)

