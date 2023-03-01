/* puedeVerPelicula(edad, tieneAutorizacion)
Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true

*/

// const puedeVerPelicula ()

// esParOImpar(numero)
//Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

const esParoImpar =(number) =>{
    if (number %2 === 0){
        return "Es Par"
    }
    else {
        return "Es impar"
    }
}

//esPositivoONegativo(numero)
//Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

const esPositivoONegativo = (number)=>{
    if (number > 0 ){
        return "es positivo"
    } else{
        return "es negativo"
    }

}

console.log (esPositivoONegativo(3))
console.log (esPositivoONegativo(-3))

// EJERCICIO 3
//avanzarSemaforo(colorActual)
//Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde


// const avanzarSemaforo =(colorActual)=>{
//     if (colorActual.toLowerCase === "verde"){
//         return "amarillo"
//     } 
//     if (colorActual.toLowerCase=== "amarillo") {
//         return "rojo"
//     }
//     if (colorActual.toLowerCase === "rojo"){
//         return "verde"
//     }

// }
//console.log (avanzarSemaforo("verde"))


const avanzarSemaforo = (colorActual) => {
    if (colorActual.toLowerCase() === "verde") {
        return "amarillo"
    } else if (colorActual.toLowerCase() === "amarillo") {
        return "rojo"
    } else {
        return "verde"
    }
}

//avanzarSemaforo("verde")

// EJERCICIO 4

//obtenerDiasMes(mes)
//Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

const obtenerDiasMes = (mes) => {
    if (mes === "enero"){
        return "31"
    }
    if (mes ==="febrero"){
        return"28"
    }
    if (mes ==="marzo"){
        return "31"
    }
    if (mes ==="abril"){
        return "30"
    }
    if (mes === "mayo"){
        return "31"
    }
    if (mes === "junio"){
        return "30"
    }
    if (mes === "julio"){
        return "31"
    }
    if (mes === "agosto"){
        return "31"
    }
    if (mes === "septiembre"){
        return "30"

    }
    if (mes === "octubre"){
        return "31"
    }
    if (mes === "noviembre"){
        return "30"
    }
    if (mes === "diciembre"){
        return "31"
    }
}
console.log(obtenerDiasMes("mayo"))
//obtenerGeneracion(anioNacimiento)
//Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

const obtenerGeneracion =(anioNacimiento)=>{
    if (anioNacimiento>= 1949 && anioNacimiento <=1968){
        return "Baby boomer"
    }
    if (anioNacimiento>= 1969 && anioNacimiento <=1980){
        return "Generacion X"
    }
    if (anioNacimiento>= 1981 && anioNacimiento <=1993){
        return "Millenials"
    }
    if (anioNacimiento>= 1994 && anioNacimiento <=2010){
        return "Generacion Z"
    }
}

console.log(obtenerGeneracion(2009))

//obtenerSensacion(temperatura)
//Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

const obtenerSensacion =(temperatura)=>{
    if (temperatura <0){
        return "Está helando"
    }
    if (temperatura>=0 && temperatura <15){
        return "¡Hace frío!"
    }
    if (temperatura <15){
        return"¡Hace frío!"
    }
    if (temperatura >=15 && temperatura <25){
        return "Está lindo"
    }
    if (temperatura >=25 && temperatura <30){
        return "Hace Calor"
    }
    if (temperatura  >=30){
        return "¡Hace mucho mucho calor!"
    }

}
    
    //obtenerNota(puntaje)
//Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

const obtenerNota = (nota) =>{
    if (Math.round (nota) < 6 && Math.round (nota)>0){
        return "Desaprobado"
    }
    if (Math.round (nota) >=6 && Math.round (nota)<7){
        return "Regular"
    }
    if (Math.round (nota) >=7 && Math.round (nota)<8){
        return "Bueno"
    }
    if (Math.round (nota) >=8 && Math.round (nota)<10){
        return "Muy Bueno"
    }
    if (Math.round (nota) === 10){
        return "Excelente"
    }
    if (Math.round (nota) < 0 || Math.round (nota)>10){
        return "Puntaje Inválido"
    }
    
}


//jugarPiedraPapelTijera(a, b)
//Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)


const jugarPiedraPapelTijera =(a,b)=>{
    if (a === "tijera" && b=== "tijera" ){
        return "empate"
    }
    if (a === "papel" && b === "papel" ){
        return "empate"
    }
    if (a === "piedra" && b === "piedra" ){
        return "empate"
    }
    
    if(a === "tijera" && b === "piedra"){
        return "Gana piedra"
    }
    if(a === "tijera" && b === "papel"){
        return "Gana tijera"
    }
    if(a === "papel" && b === "tijera"){
        return "Gana tijera"
    }
    if(a === "piedra" && b === "papel"){
        return "Gana papel"
    }
    if(a === "piedra" && b === "tijera"){
        return "Gana piedra"
    }
    if(a === "papel" && b === "piedra"){
        return "Gana papel"
    }
}

const jugarPiedraPapelTijera =(a,b)=>{
    if ((a === "tijera" && b=== "tijera" ) || (a === "papel" && b === "papel" ) || (a === "piedra" && b === "piedra" )){
        return "empate"
    }
    
    if ((a === "tijera" && b === "piedra") || (a === "piedra" && b === "tijera")){
        return "Gana piedra"
    }
    if((a === "tijera" && b === "papel") || (a === "papel" && b === "tijera")){
        return "Gana tijera"
    }
    
    if ((a === "piedra" && b === "papel") || (a === "papel" && b === "piedra")){
        return "Gana papel"
    }
    
}
    
//     , "Marzo", "Mayo", "Julio", "Agosto", "Octubre", "Diciembre")) {
//         return "31"
//     } else if (mes === "Febrero") {
//         return 28
//     } else {
//         return "30"
//     }
// 

// obtenerDiasMes("Febrero")