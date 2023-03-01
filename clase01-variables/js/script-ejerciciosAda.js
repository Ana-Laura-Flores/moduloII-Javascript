// EJERCICIO SALUDO

// const user = prompt ("ingrese su nombre")
// const userSurname = prompt ("ingrese su apellido")

// alert (`Hola ${user} ${userSurname}. Bienvenida a ADA`)

//EJERCICIO HELADO

 const cream01 = prompt ("escribí un gusto de helado")
 const cream02 = prompt ("escribí otro gusto de helado")
 const cream03 = prompt ("escribi otro más")

// alert(`Acá está su helado de ${cream01}, ${cream02} y ${cream03}`)


//Datos personales

//Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

/*const nombre =prompt("escribi tu nombre")
const apellido=prompt("escribi tu apellido")
const age=prompt("escribi tu edad")
const nacionalidad=prompt("escribi tu nacionalidad")
const documento=prompt("escribi tu documento")
alert(`Nuevo usuario agregado al sistema: ${nombre} ${apellido} ${age} ${nacionalidad} ${documento}`)*/



//Lista de reproducción

//Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".


/*const playlist=prompt("escribi el nombre de una playlist")
const cancion1=prompt("escribe el nombre de una canción")
const cancion2=prompt("escribe el nombre de una canción")
const cancion3=prompt("escribe el nombre de una canción")

alert (`Se ha creado la playlist "${playlist}" con las canciones "${cancion1}", "${cancion2}" y "${cancion3}"`)*/

//Dirección completa

//Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

const calle=prompt ("ingrese la calle")
const numeroDeCalle=prompt("ingrese la altura")
const dpto =prompt("ingrese departamento o piso")
const codigoPostal=prompt("ingrese el código postal")
const ciudad=prompt("ingrese la ciudad")
const pais=prompt("ingrese el país")
alert(`La dirección que ha ingresado es: ${calle}, ${numeroDeCalle}, ${dpto}, ${codigoPostal}, ${ciudad}, ${pais}`)

//EJERCICIOS AÑOS PERROS
// const age = prompt ("ingrese su edad")
// let agePerros = parseInt(age)*7
// alert(`Usted tiene ${agePerros}`)

//EJERCICIO Área de un triangulo

const base= prompt("ingrese el tamaño de la base")
const altura= prompt("ingrese el tamaño de la altura")
const area = parseInt(base)*parseInt(altura)/2
alert(`El area del triángulo es de ${area}`)

//EJERCICIO PERIMETRO DE RECTANGULO

const baseRect= prompt("ingrese el tamaño del ancho de un rectangulo")
const alturaRect= prompt("ingrese el tamaño de la altura de un rectangulo")
const perimetro = parseInt(baseRect)*2 + parseInt(alturaRect)*2
alert(`El perimetro del rectángulo es de ${perimetro}`)

//EJERCICIO TIEMPO DE VIAJE
const distancia = prompt ("Ingresá la distancia del recorrido")
const resultadoEnBicicleta = distancia/10
const resultadoAPie = distancia/5
const resultadoEnAuto = distancia/50
alert (`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`)

// EJERCICIO VUELO
//EJERCICIO INCREMENTO
 const number = prompt("ingrese un numero")
 const incremento = prompt ("ingrese cuanto se incrementa")
 const calculo1 = parseInt(number) + parseInt(incremento)
 const calculo2= calculo1 + parseInt(incremento)
 const calculo3= calculo2 + parseInt(incremento)
 const calculo4= calculo3 + parseInt(incremento)
 const calculo5= calculo4 + parseInt(incremento)

alert(`Incremento 1 ${calculo1}, Incremento 2 ${calculo2}, Incremento 3 ${calculo3}, Incremento 4 ${calculo4}, Incremento 5 ${calculo5}`) 

const number = prompt("Ingresá un numero")
const incremento = prompt ("Ingresá una cantidad")
const calculo1 = parseInt(number) + parseInt(incremento)
const calculo2= calculo1 + parseInt(incremento)
const calculo3= calculo2 + parseInt(incremento)
const calculo4= calculo3 + parseInt(incremento)
const calculo5= calculo4 + parseInt(incremento)

alert(`Incremento 1 ${calculo1}`)
alert (`Incremento 2 ${calculo2}`)
alert (`Incremento 3 ${calculo3}`)
alert (`Incremento 4 ${calculo4}`)
alert (`Incremento 5 ${calculo5}`)

//EJERCICIO GRADOS

const celsius = prompt("ingrese una cantidad de grados celsius")
const fahrenheit = parseInt(celsius)*1.8+32
alert(`Son ${fahrenheit} grados fahrenheit`)


const nombre = prompt ("¿Cuál es tu nombre?")
const apellido = prompt ("¿Cuál es tu apellido?")
alert (`Hola ${nombre} ${apellido}, bienvenida a Ada`)

// EJERCICIOS MULTIPLOS

const primerNumero = prompt ("Ingresá el primer número")
const segundoNumero = prompt ("Ingresá el segundo número")
const resultado = primerNumero%segundoNumero===0
alert (`El número ${primerNumero} es múltiplo de ${segundoNumero}: ${resultado}`)

// HORAS MINUTOS Y SEGUNDOS
const segundosIngresados = prompt ("Ingresá una cantidad de segundos")
const horas = Math.trunc(segundosIngresados/3600)
const minutos = Math.trunc(segundosIngresados%3600/60)
const segundos = segundosIngresados%3600%60
alert (`${segundosIngresados} segundos son = ${horas} horas, ${minutos} minutos y ${segundos} segundos`)

// HUESPEDES

const dosPersonas = prompt ("Ingresá cuantas habitaciones para dos personas tiene el hotel")
const tresPersonas = prompt ("Ingresá cuantas habitaciones para tres personas tiene el hotel")
const cuatroPersonas = prompt ("Ingresá cuantas habitaciones para cuatro personas tiene el hotel")
const resultado = parseInt(dosPersonas*2 + tresPersonas*3 + cuatroPersonas*4)
alert (`El hotel tiene una capacidad de ${resultado} personas`)

//gastos

const montoDisponible = prompt ("¿Cuál es tu monto disponible?")
const servicio1 = prompt ("¿Cuál es el nombre primer servicio?") 
const montoServicio1 = prompt ("¿Cuál es el monto del primer servicio?")
const servicio2 = prompt ("¿Cuál es el nombre segundo servicio?") 
const montoServicio2 = prompt ("¿Cuál es el monto del segundo servicio?")
const servicio3 = prompt ("¿Cuál es el nombre tercer servicio?") 
const montoServicio3 = prompt ("¿Cuál es el monto del tercer servicio?")
const saldoRestante = parseInt(montoDisponible)-( parseInt(montoServicio1) + parseInt(montoServicio2) + parseInt(montoServicio3))
alert (`Los servicios a pagar son ${servicio1} de $ ${montoServicio1}, ${servicio2} de $ ${montoServicio2}, ${servicio3} de $ ${montoServicio3}, queda disponible un saldo de $ ${saldoRestante}`)

//cuotas

const cantidadDeMouse = prompt ("Ingresá la cantidad de mouse que deseas comprar")
const cantidadDeTeclados = prompt ("Ingresá la cantidad de teclados que deseas comprar")
const cantidadAuriculares = prompt ("Ingresá la cantidad de auriculares que deseas comprar")
const cuotas = prompt ("Ingresá la cantidad de cuotas")
const precioTotalDeMouse = cantidadDeMouse*400 
const precioTotalDeTeclados = cantidadDeTeclados*800
const precioTotalAuriculares = cantidadAuriculares*1500
const precioTotal = precioTotalDeMouse + precioTotalDeTeclados + precioTotalAuriculares
const precioPorCuota = precioTotal/cuotas
alert (`El detalle de la compra es: mouse ${cantidadDeMouse} x $ 400 $ ${precioTotalDeMouse}, teclado ${cantidadDeTeclados} x $ 800 $ ${precioTotalDeTeclados}, auriculares ${cantidadAuriculares} x $ 1500 $ ${precioTotalAuriculares}. El total es $ ${precioTotal} en ${cuotas} cuotas de $ ${precioPorCuota}`)


