/*
con varialbe que representa tru o false
*/

// si necesito validar a true
const condicion = true
if (condicion) {
    console.log ("Me ejecute")
}
// si necesito validar a false
if (!condicion) {
    console.log ("Me ejecute")
}

// FIN DE REPASO

// OPERADORES LOGICOS
// && ||

// && and  NOS PERMITE EVALUAR MAS CONDICIONES Y PARA QUE SE CUMPLE LA CONDICION todos los terminos tienen que ser verdaderos

// true y true
const edad = 18
const sabeManejar = true

if (edad >= 18 && sabeManejar) {
    console.log ("Podes sacar el registro!")
} else {
    console.log ("Todavía te falta")
}


// || or  BASTA CON QUE UNA CONDICION SEA TRUE PARA QUE SE EJECUTE. LA UNICA MANERA QUE NO SE EJECUTE ES QUE AMBAS OPCIONES SEAN FALSAS 

const condition = true
const condition2 = false
if (condition || condition2) {
    console.log ("Andando")
}


// CONDICIONALES ANIDADOS

const conditional = true
const conditional2 = false
if (conditional) {
    if (conditional2) {
        console.log ("1")
    } else {
        console.log ("2")
    } 
}else {
        console.log ("3")
}

if (conditional && conditional2){
    console.log("1")
} else{
    console.log ("2")
}


// Operador ternario => es lo mismo que un if simple pero escrito bonito

// condicion ? se ejecuta si se cumple : o se ejecuta esto

// funciona para condicionales simples sin && sin ||
// estoy obligada a poner el else

const edadUser = 16
edadUser >= 16 ? console.log ("Podes votar!") : console.log ("Todavia no tenes la edad suficiente para elegir a un presidente")


if (edad >= 16){
    console.log ("Podes votar!")
}else {
    console.log ("Todavia no tenes la edad suficiente para elegir a un presidente")
}

// esPositivoONegativo

const esPositivoONegativo = (a,b) =>{
    const resultado = a + b
    return resultado > 0 ? "Es positivo" : "Es negativo"
}

console.log (esPositivoONegativo (-10, -5))
console.log (esPositivoONegativo (10, -5))


// Switch
// Evaluamos una condicion y segun cada caso ejecutamos un bloque distinto

// const diaDeLaSemana = parseInt (prompt("Ingrese un numero del 0 al 6:" , 0))

// switch (diaDeLaSemana) {
//     case 0 : 
//         console.log ("Domingo")
//         break
//     case 1 :
//         console.log ("Lunes")
//         break
//     case 2 :
//         console.log ("Martes")
//         break
//     case 3 :
//         console.log ("Miércoles")
//         break
//     case 4 :
//         console.log ("Jueves")
//         break
//     case 5 :
//         console.log ("Viernes")
//         break
//     case 6 :
//         console.log ("Sábado")
//         break

//     default:
//         console.log ("No existe ese día de la semana para el caracter ingresado")
//         break
// }


// EJERCICIOS PILAR

//puedeVerPelicula(edad, tieneAutorizacion)
//Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.


const puedeVerPelicula = (edad, autorizacion) =>{
    if (edad >=15 || autorizacion){
        return true
    }else {
        return false
    }

    }
//resollucion mumuki
    // const puedeVerPelicula = (edad, autorizacion) =>{
    //     return edad >=15 || autorizacion
    
    //     }

console.log(puedeVerPelicula(12, false)) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true

//estaEnRango(valor, minimo, maximo)
//Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

const estaEnRango = (valor, minimo, maximo) => {
    if (valor >= minimo && valor <= maximo ){
        return true
    } else {
        return false
    }
}
//mumuki
//const estaEnRango = (valor, minimo, maximo) => {
 //   return valor >= minimo && valor <= maximo
//}

console.log (estaEnRango(3, 1, 10))   // true
console.log (estaEnRango(1, 1, 10))   // true
console.log (estaEnRango(10, 1, 10))  // true
console.log (estaEnRango(12, 1, 10))  // false
console.log (estaEnRango(-3, 1, 10))  // false

//puedeAvanzar(colorSemaforo)
//Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido
// const edadUser = 16
// edadUser >= 16 ? console.log ("Podes votar!") : console.log ("Todavia no tenes la edad suficiente para elegir a un presidente")

// const puedeAvanzar2 =(color)=>{
//   return color === "verde" ? "Podes avanzar!" : "No podes avanzar"
// }

const puedeAvanzar =(color)=>{
    return color === "verde" 
     }

// const puedeAvanzar =(color)=>{
//     if (color === "verde"){
//         return "Podes avanzar!"
//     } else if (color === "amarillo" || color === "rojo"){
//         return "No podes avanzar"
//     } else {
//         return "color de semefaro inválido"
//     }
// }

// console.log (puedeAvanzar('verde'))     // true
// console.log (puedeAvanzar('amarillo')) // false
// console.log (puedeAvanzar('rojo'))      // false
// console.log (puedeAvanzar('lila'))      // 'Error: color de semáforo inválido'

//esVocal(letra)
//Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

const esVocal = (vocal) =>{
    return ((vocal=== "a" || vocal === "e"|| vocal === "i" || vocal === "o" || vocal === "u"))
}

console.log (esVocal('a')) // true
console.log (esVocal('n')) // false

//esConsonante(letra)
//Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

// const esConsonante = (consonante) =>{
//     if (consonante === "a" || consonante === "e"|| consonante === "i" || consonante === "o" || consonante === "u"){
//         return false
//     } else {
//         return true
//     }
// }


const esConsonante = (letra) =>{
    if (letra === esVocal) {
        return false
    }else{
        return true
    }
        
}
console.log (esConsonante('a')) // false
console.log (esConsonante('n')) // true

function esConsonante2(consonante2) {
    return !(consonante2 === "a" || consonante2 === "e" || consonante2 === "i" || consonante2 === "o" || consonante2 === "u")
}
// const esConsonante = (letra) =>{
//     return !letra === !esVocal
// }

// const esConsonante = (letra) => {
//     return !esVocal(letra)
//   }

console.log (esConsonante2('a')) // false
console.log (esConsonante2('n')) // true

//esHoraValida(hora)
//Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no
// const esHoraValida =(hora)=>{
//   return hora >= "00:00" && hora <="23:59" && hora.slice(3,4)<=5 
// }

const esHoraValida = (hora) => {
    const hh = parseInt(hora.slice(0, 2))
    const mm = parseInt(hora.slice(3, 5))
    return  hh <= 23 &&  mm <= 59
}





// const esHoraValida = (stringHora) => {
//     return ((stringHora <= "12:59" && stringHora <= "23:59") || (stringHora <= "01:59" && stringHora <= "12:59") ||stringHora === "00:00") 
// }
console.log (esHoraValida("12:23")) // true
console.log (esHoraValida('12:65')) // false
console.log (esHoraValida('28:05'))// false
console.log (esHoraValida('00:00')) // true

//puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
//Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    return pasoTests && !tieneMultasImpagas && pagoImpuestos
}

console.log (puedeRenovarCarnet(true, true, true) )
console.log (puedeRenovarCarnet(true, false, true))

//puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
//Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

const puedeGraduarse =(asistencia, materiasAprobadas, tesisAprobada)=>{
    return (asistencia>=75 && materiasAprobadas >=50 && tesisAprobada)
}
console.log(puedeGraduarse(80, 50, true))
console.log (puedeGraduarse(42, 45, true))
console.log (puedeGraduarse(28, 45, false))  // false
console.log (puedeGraduarse(65, 50, true))



// const puedeAvanzar = (colorSemaforo) => {

//     let colorValido1 = "verde"
//     let colorValido2 = "amarillo"
//     let colorValido3 = "rojo"
//     let mensaje ="color invalido"

//     if (colorSemaforo === colorValido1){
//     return true}

//     if (colorSemaforo === (colorValido2, colorValido3)){
//     return false}

//     else {
//     return mensaje}
    
// }
// console.log (puedeAvanzar('verde'))     // true
//  console.log (puedeAvanzar('amarillo')) // false
//  console.log (puedeAvanzar('rojo'))      // false
//  console.log (puedeAvanzar('lila'))  


 