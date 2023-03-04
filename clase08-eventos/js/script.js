// EVENTES

// addEventListener(tipoDeEvento, callback)

// callback => es una funcion pasada como argumento
const $ =(selector)=> document.querySelector(selector)


/*const mostrarClick =()=>console.log("HICE CLICK")
$(".btn").addEventListener("click", mostrarClick)

let contador = 0

const sumar = () => ++contador
const restar = () => --contador

$(".numeroContador").innerText = contador

$(".decrementar").addEventListener("click", ()=>{
    if (contador > 0){
        restar()

    }
    if(contador === 0){
        $(".decrementar").setAttribute("disabled", true)
    }

    restar()

    $(".numeroContador").innerText = contador
})

$(".incrementar").addEventListener("click", () =>{
    sumar()
    $(".decrementar").removeAttribute("disabled")

    $(".numeroContador").innerText = contador
})
/*
//const saludar = (nombre) =>alert(nombre)

/*
    Cuando yo necesite que mi evento ejecute una funcion que recibe uno o mas argumentos, necesito pasarle como callback una funcion anonima () => {}.
    Si NO recibo NINGUN argumento, solo le paso el nombre de la funcion como argumento.
*/

/*

$(".saludar").addEventListener("click", ()=>{
    saludar("Ana Laura")
})

*/


// $(".caja").addEventListener("click", ()=>{
//     $(".caja").style.backgroundColor = green
// })


//mouseover
//mouseout
/*
$(".caja").addEventListener("mouseover", ()=>{
    $(".caja").style.backgroundColor = "green"
})
$(".caja").addEventListener("mouseout", ()=>{
    $(".caja").style.backgroundColor = "red"
})
*/
// EJERCICIOS

//playlist
//Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada
/*
const cancionUno = prompt("Ingrese la primera canción")
const cancionDos = prompt("Ingrese la segunda canción")
const cancionTres = prompt("Ingrese la tercera canción")
const cancionCuatro = prompt("Ingrese la cuarta canción")
const cancionCinco = prompt("Ingrese la quinta canción")

$(".cancion1").innerText = cancionUno
$(".cancion2").innerText = cancionDos
$(".cancion3").innerText = cancionTres
$(".cancion4").innerText = cancionCuatro
$(".cancion5").innerText = cancionCinco
*/

//$(".canciones_container").innerHTML += "<li>Me cree desde js</li>"

//contador
//Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.
let contadorUser = 0
 const contadorMasUno = () => contadorUser += 1
 const contadorMenosUno = () => contadorUser -= 1
 const contadorMasCinco = () =>contadorUser += 5
 const contadorMenosCinco = () =>contadorUser -= 5
 const contadorMasDiez = () =>contadorUser += 10
 const contadorMenosDiez = () =>contadorUser -= 10
/*
 const sumar =(num)=>contador += num 
 const restar (num) => contador += num
 */
//const sumar = () => ++contador

//$(".btn-1").addEventListener("click", (){

//})

const contadorGeneral = () =>{
     $(".btn-1").addEventListener("click", ()=>{
        $(".numero").innerText = contadorMenosUno()
    })
    $(".btnMas1").addEventListener("click", ()=>{
        $(".numero").innerText = contadorMasUno()
    })
    $(".btn-5").addEventListener("click", ()=>{
        $(".numero").innerText = contadorMenosCinco()
    })
    $(".btnMas5").addEventListener("click", ()=>{
        $(".numero").innerText = contadorMasCinco()
    })
    $(".btnMas10").addEventListener("click", ()=>{
        $(".numero").innerText = contadorMasDiez()
    })
    $(".btn-10").addEventListener("click", ()=>{
        $(".numero").innerText = contadorMenosDiez()
    })
    
    } 
contadorGeneral()

//adivinanza
//Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.
const acertaste = "Muy bien!! Acertaste!!"
const noAcertaste = "Uh!! Le erraste!!"
const adivinador = () =>{
    $(".correcto").addEventListener("click", ()=>{
        $(".respuesta").innerText= acertaste
//$(".respuesta").style.fontFamily = 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        $(".correcto").style.backgroundColor = "green"
        $(".incorrecto").style.backgroundColor = "red"
        $(".incorrecto2").style.backgroundColor = "red"
        })
    $(".incorrecto").addEventListener("click", ()=>{
        $(".respuesta").innerText= noAcertaste
        $(".correcto").style.backgroundColor = "green"
        $(".incorrecto").style.backgroundColor = "red"
        $(".incorrecto2").style.backgroundColor = "red"
             
    })
    $(".incorrecto2").addEventListener("click", ()=>{
        $(".respuesta").innerText= noAcertaste
        $(".correcto").style.backgroundColor = "green"
        $(".incorrecto").style.backgroundColor = "red"
        $(".incorrecto2").style.backgroundColor = "red"
    })
}
adivinador()

$(".items").addEventListener("click", ()=>{
    $(".items").classList.toggle("normal")
})
//paleta
//Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.
/*
$(".paleta-rojo").addEventListener("click", ()=>{
    $(".paleta").style.backgroundColor = "red"
})
$(".paleta-verde").addEventListener("click", ()=>{
    $(".paleta").style.backgroundColor = "green"
})
$(".paleta-azul").addEventListener("click", ()=>{
    $(".paleta").style.backgroundColor = "blue"
})
$(".paleta-rosa").addEventListener("click", ()=>{
    $(".paleta").style.backgroundColor = "pink"
})
$(".paleta-gray").addEventListener("click", ()=>{
    $(".paleta").style.backgroundColor = "gray"
})
*/

//email (sin leer)
//Crear un documento html que tenga:

//un título h1 que diga: Mis emails
//un título h2 que diga: Bandeja de entrada
//una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
//Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)



