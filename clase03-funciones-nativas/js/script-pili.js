//Ejercicio 1
//Crear una funcion que reciba como argumento un string y devuelva la cantidad de caracteres que tenga el mismo.
//candidadDeCaracteres("Hola Mundo!") // deberia devolver 11

const cantidadDeCaracteres = (string)=>{
    return  string.length
}

console.log (cantidadDeCaracteres("Hola Mundo!"))

//Ejercicio 2
//Tomar la siguiente variable, convertirla a todo mayusculas y mostrar por consola. Hacer lo mismo pero con minusculas.


let string = "El artista WOS cantando QUEREME"

console.log (string.toUpperCase())
console.log (string.toLowerCase())

//Ejercicio 3
//Tomar la variable del ejercicio 2 y cortar el string devolviendo solo "WOS" y hacer el mismo proceso pero devolver "QUEREME".

console.log(string.slice(11,14))

console.log(string.slice(24))

//Ejercicio 4
//Tomar la variable del ejercicio 2 y reemplazar "WOS" por "Queen" y "QUEREME" por "Bohemian Rhapsody"




console.log(string.replace("WOS","Queen").replace("QUEREME", "Bohemian Rhapsody"))

//Ejercicio 5
//Crear una funcion que tome por parametro un numero de DNI y retorne el mismo valor pero como un string

let dni=23824563

const transformaAString = dni.toString()

console.log (transformaAString)
console.log (typeof transformaAString)

//Ejercicio 6
//Crear una funcion que tome por parametro al menos 4 numeros y retorne el numero menor de ellos
//Realizar lo mismo pero con otra funcion que retorne el numero mayor

//const minimo = Math.min()


//console.log(minimo(25,65,98,456,421))
console.log (Math.min(10,36,87,56))

const minimo = Math.min(5, 10, -7, 43)

console.log(minimo)
//console.log (minimo(5, 10, -7, 43))

console.log(Math.max(-1, 12, 32, 18))

//Ejercicio 7
//Crear una funcion que tome por argumento un numero y retorne un numero aleatorio entre el 0 y el argumento.
//numeroRandom(100) // puede devolver cualquier numero entre 0 y 100

const numeroAleatorio = Math.random()

const numeroAleatorioRedondeado = Math.round(Math.random(95))

console.log (numeroAleatorio)
console.log(numeroAleatorioRedondeado)



////////////// EJERCICIOS ADA ////////////

//Ejercicios tienenMismaLongitud(a, b)
//Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

//const tienenMismaLongitud = a.length===b.length
const tienenMismaLongitud =(a,b)=>{
    return a.length===b.length
    
}
console.log (tienenMismaLongitud('javascript', 'java'))

//tienenMismaLongitud('javascript', 'java') // false
//tienenMismaLongitud('manzana', 'cerveza') // true


//esUltimoCaracter(palabra, caracter)
//Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario

const esUltimoCaracter=(palabra, caracter)=>{
    return palabra.slice(-1)===caracter
}

esUltimoCaracter('lovelace', 'e') // true
esUltimoCaracter('lovelace', 'f') // false

console.log (esUltimoCaracter('lovelace', 'f'))
console.log (esUltimoCaracter('lovelace', 'e'))

//esContraseniaValida(contrasenia)
//Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

const esContraseniaValida=(contrasenia)=>{
    return contrasenia.length>=8
}

console.log (esContraseniaValida('contraseniaMuySegura')) // true
console.log (esContraseniaValida('abc123')) // false


//contarPalabras(str)
//Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee

const contarPalabras =(texto)=>{
    return texto.split(" ").length

}

console.log (contarPalabras ("javascript")) // 1
console.log (contarPalabras('ada lovelace')) // 2
console.log (contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')) // 14

//burlarse(str)
//Crear una función burlarse que tome como argumento un string str y devuelva el mismo string con todas las vocales reemplazadas por la letra i
// let str ="programar es dificil"
//  const burlarse =(str)=>{
//  return str.replace("a","i")
// }
//  console.log (burlarse()) // 'prigimir is dificil'
  
//esFraccionMayorAUno(fraccion)
//Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario


const esFraccionMayorAUno = (number)=> {
    return parseInt(number.slice(0,1))/parseInt(number.slice(2))>1
}
console.log (esFraccionMayorAUno(1/2)) // false
console.log (esFraccionMayorAUno(2/2)) // false
console.log (esFraccionMayorAUno(4/2)) // true

//capitalizar(str)
//Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula
//const capitalizar =(str) =>{
//    return str.slice(0) = str.replace(toUpperCase())

//}
const capitalizar = (str) =>{
    return str.slice(0,1).toUpperCase()+ str.slice(1)
}
    
console.log(capitalizar('lovelace')) // 'Lovelace'
console.log (capitalizar('había una vez...')) // 'Había una vez...

