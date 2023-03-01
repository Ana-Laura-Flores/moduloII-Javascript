//DOM
//Ejercicios
//saludo
//Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.


const $ =(selector)=> document.querySelector(selector)


// const nombreUsuario = prompt("Ingrese su nombre")

// saludo.innerHTML += nombreUsuario

//color
//Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

// const pedirColor = prompt("Ingresá un color en sistema hexadecimal")


// $("body").style.backgroundColor = pedirColor

//rgb
//Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

// const pedirRgb1 = prompt("Ingresá primer valor de RGB", 0)
// const pedirRgb2 = prompt("Ingresá segundo valor de RGB", 0)
// const pedirRgb3 = prompt("Ingresar tercer valor de RGB")
/*
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
    return `${rgb1}, ${rgb2}, ${rgb3}`
}

 
}

rgb()
$("body").style.backgroundColor = rgb
*/
// imagen
//Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

const size = () =>{

 prompt("Ingresá un tamaño de imagen: chica - mediana - grande")

if (size === "chica"){
    return $("img").classList.add("chica")
}else{
   
 if (size === "mediana") {
    return $("img").classList.add("mediana")
} else {
    
    if (size === "grande"){
        return $("img").classList.add("grande")
    }else{
        alert (`no anda`)
    }
}
}
} 
size ()

    

// $("img") img.classList.add("grande")
// $("img") img.classList.add("mediana")
// pedirRgb1 <=255

// const Rgb = pedirRgb1, pedirRgb2, pedirRgb3
