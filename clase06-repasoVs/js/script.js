// let y const
// let puede cambiar
// const no cambia

// sin poner true ni false

//puedeVerPelicula(edad, tieneAutorizacion)
//Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
// const puedeVerPelicula = (edad, autorizacion) =>{
//     return edad >=15 || autorizacion
//     }



    //console.log(puedeVerPelicula(12, false)) // false
    //console.log (puedeVerPelicula(12, true)) // true
    //console.log (puedeVerPelicula(16, false)) // true
    //console.log (puedeVerPelicula(18, true)) // true
//doble return sin else
    // const puedeVerPelicula = (edad, autorizacion) =>{
    //     if (edad >=15 || autorizacion){
    //         return true
    //     }
    //                 return "kjadsljlajlsd"
            
    //     }

    //     console.log(puedeVerPelicula(12, false))

        //return implicito

        // const puedeVerPelicula3 = (edad, autorizacion) => edad >= 15 || autorizacion


//esHoraValida(hora)
//Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no
// const esHoraValida =(hora)=>{
//   return hora >= "00:00" && hora <="23:59" && hora.slice(3,4)<=5 
// }

// const esHoraValida = (hora) => {
//     const hh = parseInt(hora.slice(0, 2))
//     const mm = parseInt(hora.slice(3, 5))
//     return  hh <= 23 &&  mm <= 59
// }

// console.log (esHoraValida("12:23")) // true
// console.log (esHoraValida('12:65')) // false
// console.log (esHoraValida('28:05'))// false
// console.log (esHoraValida('00:00')) // true

// defer para poder poner el script en el head

// adivina el numero
// crear un juego en el que se le pide al usuario adivinar un numero random
// si el usuario gana, emitir un mensaje que diga felicitaciones adivinaste. caso contrario, lo siento perdiste
//Darle al usuario 3 vidas como chances

const numeroAleatorio = Math.round(Math.random()*10)
let vidas = 3
const adivinaElNumero = ()=> {
    const numeroElegido = parseInt(prompt("Adiviná un numero del 0 al 10:", 0))

    if (!isNaN(numeroElegido)){    

        if (numeroAleatorio === numeroElegido){
            alert ("felicidades ganaste")
        }else{
            vidas --
            if(vidas > 0){
            adivinaElNumero()
            }   else{
            alert ("Lo siento, perdiste")
            }
    
        }
    
    }else{
    alert ("che gil, te dije que metas un numero")
    adivinaElNumero()
}
}
adivinaElNumero()

