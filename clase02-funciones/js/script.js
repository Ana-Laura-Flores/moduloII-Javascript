// console.log("hola mundo")

//REPASO

//variables string - number - boolean - undefined - null - Nan - infinity
//let y const

//nan => Not a Numbers

// let firstname="Ana Laura"
// let lastname = "Flores"

// console.log(firstname)
// document.write(firstname)

// document.write(`<h1>${firstname} ${lastname}</h1>`)

// confirm

// const acceptTerms = confirm("aceptas los términos y condiciones?")
// console.log (acceptTerms)

// let num1 = 5
// let num2 = 10
// let num3 = 15


//true = 1
//false = 0


/* FIN DEL REPASO */

/* INICIO DE CLASE*/

// FUNCIONES
// ES UN BLOQUE DE CODIGO QUE SE PUEDE REUTILIZAR



//vieja forma de hacer funciones
// function welcome (){
//     // sentencias de codigo
//     alert("Hola desde mi funcion saludar!")
// }

// welcome()


//arrow funtion

const welcome = ()=>{
    document.write("Hola desde mi arrow funcion saludar!<br>")

}
// welcome()
// welcome()
// welcome()


// PARAMETROS

const showName =(name)=>{
    console.log(name)
}

showName("Ana")
showName("Laura")
showName("Rocco")
showName()

// const sumar =()=>{
//     const resultado = 5+10
//     console.log(resultado)
//     return resultado
// }

sumar()

const suma =(num1, num2)=>{
    const resultadoSuma = num1 + num2
    console.log(resultadoSuma)
    return resultadoSuma
}

 const num1=parseInt(prompt("ingrese un numero"))
 const num2=parseInt(prompt("ingrese otro numero"))
document.write(`EL resultado es ${suma(num1, num2)}`)
// suma(pedido,pedido2)
// suma(-10,10)
// suma(75,-33)

//return

const resta =(a,b)=> {
    const result = a-b
    return result
}

const miResta =resta(10,5)
// console.log(miResta)

console.log(sumar(10, resta(11, -6)))


