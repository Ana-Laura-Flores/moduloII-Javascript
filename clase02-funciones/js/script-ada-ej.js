//Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

const suma = (a,b)=>{
    return a+b
}
console.log(suma(10,5))
console.log(suma(2.3,1.4))

const resta =(a,b)=>{
    return a-b
}
console.log (resta(5,3))

const multi=(a,b)=>{
    return a*b
}
console.log(multi(2,6))

const dividir=(a,b)=>{
    return a/b
}

console.log(dividir(10,5))

//esPar(numero)
//Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

//TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

const esPar=(numero)=> {
    if(numero % 2 == 0) {
      return "true";
    }
    else {
      return "false";
    }
  }
  console.log(esPar(5))

  console.log(esPar(2546898))

  //esImpar(numero)
//Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es
  
  
  const esImpar=(numero)=> {
    if(numero % 2 == 1) {
      return "true";
    }
    else {
      return "false";
    }
  }
  console.log(esImpar(5))

  console.log(esImpar(2546898))

  //calcularAreaTriangulo(base, altura)
//Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

const calcularAreaTriangulo =(base, altura)=>{
    return base*altura/2
}

console.log (`El area del triangulo es ${calcularAreaTriangulo(10,5  )} `)

//gritar(str)
//Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

const gritar = (grito)=>{
  return `¡${grito}!` 
}

console.log(gritar("hola"))
console.log(gritar("aaaaaaaaa"))
console.log(gritar("al fin lo saqué"))

//obtenerNombreCompleto(nombre, apellido)
//Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

const obtenerNombreCompleto=(nombre,  apellido)=>{

  return nombre + " " + apellido

}
console.log(obtenerNombreCompleto("Ana Laura", "Flores"))


//(nombre)
//Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.

//saludar('Ada') // 'Hola Ada, un gusto conocerte'

// const saludar =(nombre)=>{
// return `Hola ${nombre}, un gusto conocerte`

// }

// console.log (saludar("Camila"))

const saludar =(nombre)=>{
  return `Hola ${nombre}, un gusto conocerte`

}

console.log (saludar("Camila"))
console.log (saludar(obtenerNombreCompleto("Ana Laura ", "Flores")))

//saludarGritando(nombre, apellido)
//Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

const saludarGritando=(nombre,apellido)=>{
  return (gritar(saludar(obtenerNombreCompleto(nombre, apellido))))
}
console.log (saludarGritando("Camila ", "Fuentes"))

console.log (gritar(saludar(obtenerNombreCompleto("Camila ", "Fuentes"))))

//obtenerDatosDeCiudad(nombre, poblacion, pais)
//Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

const obtenerDatosDeCiudad =(nombreCiudad, poblacion, pais)=>{ 
  return `La ciudad de ${nombreCiudad} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`
}

console.log(obtenerDatosDeCiudad("Nagua", 111, "Republica Dominicana"))

console.log(obtenerDatosDeCiudad("Mako", 7851, "Australia"))

//convertirHorasEnSegundos(horas)
//Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

// convertirHorasEnSegundos(1) // 3600
// convertirHorasEnSegundos(3) // 10800
// convertirHorasEnSegundos(4.5) // 16200

const convertirHorasEnSegundos=(horas)=>{

  return  horas*3600
  
}

console.log (convertirHorasEnSegundos(5))

//calcularPerimetroRectangulo(ancho, alto)
//Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

//calcularPerimetroRectangulo(3.2, 5) // 16.4
//calcularPerimetroRectangulo(10, 20) // 60

const calcularPerimetroRectangulo =(ancho, alto)=>{
  return ancho*2 + alto*2
}

console.log(calcularPerimetroRectangulo(10,5))

console.log(calcularPerimetroRectangulo(3.2, 5))

//calcularPorcentaje(numero, porcentaje)
//Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número
const  calcularPorcentaje =(numero, porcentaje)=>{

  return numero*porcentaje/100

}
console.log (calcularPorcentaje(666,98))
console.log(calcularPorcentaje(200,10))

//sumarPorcentaje(numero, porcentaje)
//Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar

const sumarPorcentaje=(numero, porcentaje)=>{
  return numero*porcentaje/100+numero
}

console.log(sumarPorcentaje(200,10))

//restarPorcentaje(numero, porcentaje)
//Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar

const restarPorcentaje = (numero, porcentaje)=>{
  return numero-numero*porcentaje/100
}

console.log(restarPorcentaje(100,15))

//calcularFPS(fps, minutos)
//FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

const calcularFPS=(fps, minutos)=>{
  return fps*60*minutos
}

console.log(calcularFPS(10,2))

//obtenerCompetencia(a, b)
//Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b

const obtenerCompetencia=(a,b)=>{
  return`${a} vs ${b}`
}

console.log(obtenerCompetencia("Javascript", "Python"))

//enerarEmail(usuario, dominio)
//Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

//generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'

const generarEmail=(usuario, dominio)=>{
  return `${usuario}@${dominio}.com`
}

console.log (generarEmail("mariana", "hotmail"))
console.log (generarEmail("valentina", "gmail"))

//esMayorDeEdad(edad)
//Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario

const esMayorDeEdad=(edad)=>{
  if (edad>=18){
    return "true"
  }
  else{
    return"false"
  }
}

console.log(esMayorDeEdad(15))
console.log(esMayorDeEdad(25))

//haceCalor(temperatura)
//Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace calor (22 grados o más) o false de lo contrario

const haceCalor=(temperatura)=>{
  if(temperatura>=22){
    return "true"
  }
  else{
    return "false"
  }

}
console.log(haceCalor(36))
console.log(haceCalor(10))

//haceFrio(temperatura)
//Crear una función haceFrio que tome como argumento un número temperatura y devuelva true si hace frio (12 grados o menos) o false de lo contrario

const haceFrio=(temperatura)=>{
  if (temperatura<=12){
    return"true"
  }
  else{
    return"false"
  }
}
console.log(haceFrio(0))

//calcularPuntaje(facil, normal, dificil)
//Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos

const calcularPuntaje=(facil, normal, dificil)=>{
  return facil*3 + normal*5 + dificil*10
}

console.log(calcularPuntaje(5,1,2))

//aceptaDeposito(monto)
//Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es

const aceptaDeposito=(monto)=>{
  if (monto%10===0){
    return "true"
  }
  else{
    return "false"
  }
}

console.log(aceptaDeposito(500))
