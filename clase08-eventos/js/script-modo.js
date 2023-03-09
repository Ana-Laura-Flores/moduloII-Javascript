const $ =(selector)=> document.querySelector(selector)


//modo-oscuro
//Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

//modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
//modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna//

$(".btn-mode").addEventListener("click", ()=>{
    $(".modo").classList.toggle("claro")
})

//scroll
//Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:
window.addEventListener("scroll", ()=>{
    if (window > 500){
        $(".modo").classList.add("modo-scroll")
    }
})