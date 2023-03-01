// REPASO
//FUNCIONES ARITMETICAS -RETURN
//BONUS CONTADOR

const sumar=(a, b)=>{
    return a+b

}

const resta=(a, b)=>{
    return a-b

}
const multi=(a, b)=>{
    return a*b

}
const divi=(a, b)=>{
    return a/b

}


const resultado =sumar(20, 50)
console.log(resta(100, sumar(20, 50)))


const saludar =()=>{
    const nombreUsuario= prompt("ingrese su nombre")
    return `holaa ${nombreUsuario}`
}
// console.log(saludar(nombreUsuario))


//CONTADOR
let numero=12

const incrementar=(x)=>{
    numero++
    return numero
}


const precioIva =(precio, porcentaje)=>{
    return precio*porcentaje/100 
}

// const impuestoPais =(precio)=>{
//     const total = (precio*35/100)
//     return total
// }

const impuestoPais =(precio, porcentaje)=>{
    return precio*porcentaje/100
}


// practica   PREGUNTAR
// const impuestoPais = (precioIva) =>{
//     const precioConImpuesto = precioMasIva*35
// }
// impuestoPais(precioConImpuesto)

const impuestos =(precio)=>{
    return precioIva(precio)+impuestoPais (precio) + precio
}


// FIN DEL REPASO

//FUNCIONES NATIVAS

let nombre = "Hola Pilar"

let number01 = 10

//lenght =>devuelve el numero de caracteres de nuestra variable no es funcion no lleva parentesis es un metodo

console.log(nombre.length)

// toUperCase= es una función lleva parentesis para llamarla=>toma el string y lo pasa a Mayuscula

console.log(nombre.toUpperCase())

// toLowerCase = es una funcion lleva parentesis para llamarla => toma el string y lo pasa a minuscula

console.log(nombre.toLowerCase())

// slice=> corta nuestro string entre la cantidad de caracteres dados // indice - index - posicion
const saludoCortado= nombre.slice(5)
console.log (saludoCortado)
//dos parametro uno para empezar y otro para terminar
const saludoCortado2= nombre.slice(0, 4)
console.log (saludoCortado2)
// includes=>devuelve un boleano true o false incluye o no lo que le indico
console.log(nombre.includes("Hola"))
console.log(nombre.includes("hola"))


// indexOf =>devuelve el numero del caracter que recibe como argumento si no encuentra un argumento tira -1 // siempre devuelve el primero que encuentre si hay dos

console.log(nombre.indexOf("P"))

// replace =>recibe como argumento lo que tiene que reemplazar y lo que va a hacer reemplazado

const reemplazarNombre =nombre.replace("Pilar", "Mica")
console.log(reemplazarNombre)


// toString => toma un dato y lo transforma en string

console.log(typeof number01.toString())

//Number() => te transforma a numero y respeta la coma
let numeroConComa ="10.5"
console.log(Number(numeroConComa))

//bolean() => detecta si un tipo de dato es truthy o falsy
const booleano = Boolean(nombre)
console.log(booleano)

//isNaN() => pregunta si o no es un numero
console.log(isNaN(numero))

// objeto Math => es un dato que ya viene con javascript y posee sus propios metodos y funciones

let float =10.6


// round redondea

console.log(Math.round(float))

// ceil => redonde para arriba

console.log(Math.ceil(float))

// floor => redondea siempre para abajo

console.log(Math.floor(float))


// random => devuelve un numero aleatorio entre 0 y 1
console.log(Math.random())
console.log(Math.random()*10)

//min => devuelve el numero mas chico
console.log(Math.min(10, 55, 120, -12, -4, 30))


//max => devuelve el numero mas grande
console.log(Math.max(10, 55, 120, -12, -4, 30))


// EJERCICO PRACTICO=> DEVOLVER UN NUMERO ALEATORIO ENTRE O Y 5 SIN COMA, ES DECIR REDONDEADO

const numeroRandom=Math.round(Math.random()*100)

console.log(numeroRandom)




