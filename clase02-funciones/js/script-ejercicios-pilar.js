const hello =(nombre)=>{
   return`Hola ${nombre}` 

}
console.log (hello("Ana"))
console.log (hello("Gine"))
console.log (hello("Wendy"))


// Ejercicio 1
// Crear una funcion que reciba como parametro dos numeros y devuelva el resultado de cada calculo aritmetico.
const suma =(a, b)=>{
    return `La suma es ${a + b}`
}
console.log (suma(3, 5))

const resta =(a, b)=>{
    return `La resta es ${a - b}`
}
console.log (resta(15, 5))

const multi =(a, b)=>{
    return `La multiplicación es ${a * b}`
}
console.log (multi(3, 5))

const divi =(a, b)=>{
    return `La división es ${a / b}`
}
console.log (divi(15, 5))

// Ejercicio 2
// Crear una funcion que reciba como parametro un sueldo y un numero que representa el porcentaje de aumento. La funcion debe devolver el sueldo mas el aumento.

const sueldo =(base, porcentaje)=>{
    const aumentoSueldo=(base*(porcentaje/100)+base)
    return `El aumento de sueldo es ${aumentoSueldo}`
}
console.log (sueldo(4000,10))

console.log (sueldo(8000,30))

// Ejercicio 3
// Crear una funcion que reciba como parametros un nombre, una edad, una profesion y un pais y retorne un string con la concatenacion de los datos ingresados. Probar con varios datos varias veces para comprobar funcionamiento. Ejemplo: Me llamo Pepa, tengo 30 anios, vivo en Colombia y soy abogada.

const caracteristicasUser = (user, age, profesion, country)=>{
    return `Mi nombre es ${user}, tengo ${age} años, vivo en ${country} y soy ${profesion}`
}

console.log(caracteristicasUser("ana", 42, "diseñadora gáfica", "argentina"))

console.log(caracteristicasUser("gineska", 30, "licenciada", "argentina"))






const precioIva =(precio)=>{
    
    
    return precio*21/100 + precio
}

console.log(precioIva(100))
console.log(precioIva(500))

// Ejercicio 5
// Como harian para usar las funciones del ejercicio 1 pero que los numeros se los pidamos al usuario?


// const sumaUser =(numUser1, numUser2)=>{
//     numUser1 = parseInt (prompt("ingrese un numero entero", 0))
//     numUser2 = parseInt (prompt ("ingrese otro numero entero", 0))
// return numUser1 + numUser2
//  }
//   console.log (restaUser())

 /* const restaUser =(numUser1, numUser2)=>{
    numUser1 = prompt("ingrese un numero entero", 0)
    numUser2 = prompt ("ingrese otro numero entero", 0)
return numUser1 - numUser2
 }
  console.log (`El resultado de la resta es ${restaUser()}`)*/

   



// Repetir solucion pero para el ejercicio 2 y ejercicio 3

/*const sueldoUser =(base, porcentaje)=>{
    base= parseInt( prompt("ingrese su sueldo base"))
    porcentaje = parseInt ( prompt("ingrese el porcentaje de aumento"))
    const aumentoSueldo=(base*(porcentaje/100)+base)
    return `El aumento de sueldo es ${aumentoSueldo}`
}
console.log  (`Su sueldo con aumento es ${sueldoUser()}` )*/

/*const datosUser = (user, age, profesion, country)=>{
    user=prompt("ingrese su nombre")
    age= prompt("ingrese su edad")
    country= prompt("ingrese su país de residencia")
    profesion=prompt("ingrese su profesión")
    return `Mi nombre es ${user}, tengo ${age} años, vivo en ${country} y soy ${profesion}`
}

console.log(datosUser())*/


//Bonus:
//Crear una funcion contador() que cada vez que se ejecute, sume en una unidad a una variable.

const contador =(numberOne)=>{
    return ++numberOne
}

console.log (contador(15))
console.log (contador(20))
