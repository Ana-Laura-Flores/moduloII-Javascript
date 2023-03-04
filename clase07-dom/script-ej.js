//DOM
//Ejercicios
//saludo
//Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.


const $ =(selector)=> document.querySelector(selector)


/*const nombreUsuario = prompt("Ingrese su nombre")

saludo.innerHTML += nombreUsuario*/
//const nombreSaludo = prompt("Ingrese su nombre:")
const h1 = document.querySelector("h1")
h1.style.fontFamily = "Garamond"
h1.style.textAlign = "center"
h1.style.fontSize = "60px"

//h1.innerText += nombreSaludo


//h1.innerHTML = `Bienvenida ${nombreSaludo}`

// con class
h1.classList.add("titulo")

// con la funcion
//$("h1").classList.add("titulo")

//color
//Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

//const pedirColor = prompt("Ingresá un color en sistema hexadecimal", "#ffff")

//$("body").style.backgroundColor = pedirColor

//rgb
//Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

// const pedirRgb1 = prompt("Ingresá primer valor de RGB", 0)
// const pedirRgb2 = prompt("Ingresá segundo valor de RGB", 0)
// const pedirRgb3 = prompt("Ingresar tercer valor de RGB")

const rgb = (rgb1, rgb2, rgb3)=>{
    rgb1 = parseInt(prompt("Ingresa primer valor de rgb del 0 al 255", 0))
    if (rgb1 > 255){
        rgb()
    } else{
    rgb2 = parseInt(prompt("Ingresa segundo valor de rgb del 0 al 255", 0))
    } if (rgb2 > 255){
    rgb()
    }else{
    rgb3 = parseInt(prompt("Ingresa tercer valor de rgb del 0 al 255", 0))
    } if (rgb3 > 255){
    rgb()
    } else {
    return `rgb(${rgb1} ${rgb2} ${rgb3})`
}

 
}

//rgb()
//$("body").style.background = rgb



// imagen
//Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:


const size = (sizeImg) =>{
 sizeImg = prompt("Ingresá un tamaño de imagen: chica - mediana - grande")
 
if (sizeImg.toLowerCase() === "chica"){
    return $("img").classList.add("chica")
}
   
if (sizeImg.toLowerCase()  === "mediana") {
    return $("img").classList.add("mediana")
}     
if (sizeImg.toLowerCase() === "grande"){
        return $("img").classList.add("grande")
    }else{
        alert(`te dije chica - mediana - grande`)
        size()
    }
}

// hacer en un solo if este ejercicio


//size ()

    

// $("img") img.classList.add("grande")
// $("img") img.classList.add("mediana")
// pedirRgb1 <=255

// const Rgb = pedirRgb1, pedirRgb2, pedirRgb3



//temperatura
//Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

const modificarTemperatura = (temperatura)=>{
    temperatura = parseInt(prompt("Indicá una temperatura"))
    if (temperatura<0) {
        $("h2").style.color = "blue"
    } 
    if (temperatura>=0 && temperatura<15) {
        $("h2").style.color = "lightblue"
    } 
    if (temperatura>=15 && temperatura<25) {
        $("h2").style.color = "green"
    } 
    if (temperatura>=25 && temperatura<30) {
        $("h2").style.color = "yellow"
    } 
    if (temperatura>=30 && temperatura<35) {
        $("h2").style.color = "orange"
    } 
    if (temperatura>35) {
        $("h2").style.color = "red"
    } 

    return $("h2").innerHTML = `Temperatura actual: ${temperatura}`
}

//modificarTemperatura()

//progreso
//Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

const barraProgreso = (porcentaje)=>{
    porcentaje = prompt("Ingresá un porcentaje")
    $(".barra").style.width = `${porcentaje}%`
    //$(".contenedora").innerHTML += `${porcentaje}%`
}
barraProgreso()

//reacciones
//En un documento html hacer un post de una red social que contenga:

//un h3 con la usuaria
//un p con un lorem ipsum
//3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
//Dar estilos para que

//la tipografía sea distinta a la default
//los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
//Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

const like = prompt("Ingrese cantidad de me gusta:", 0)
const heart = prompt("Ingrese cantidad de me encanta:", 0)
const wonder = prompt("Ingrese cantidad de me asombra:", 0)

$(".me_gusta").innerText += like
$(".me_encanta").innerText += heart
$(".me_asombra").innerText += wonder


//CARDS
const title = prompt("Ingresá un título")
const url = prompt("Ingresá una url de una imagen")
const article = prompt("Ingresá un artículo")

$("h1").innerText = title
$("img").src = url
$("a").href = article

