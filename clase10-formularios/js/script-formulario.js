const $ = (selector)=> document.querySelector(selector)
const hiddenElement = (element)=> element.style.display ="none"

const showElement =(element)=> element.style.display = "none"



// $("#fulname").value

//click submit

//preventDefault()  > Evita el comportamiento por default
/*
$("#submit").addEventListener("click", ()=>{
    $("#paragraph").innerText = $("#fullname").value
})
*/

// si pongo form lo hago asi

/*
$("#submit").addEventListener("click", (e)=>{
    e.preventDefault()
    $("#paragraph").innerText = $("#fullname").value
})

*/
//window.addEventListener("load", ()) inicia cuando se carga

// input, change blur focus  cambia a medida que escribo
/*
$("#fullname").addEventListener("input", ()=>{
    $("#paragraph").innerText = $("#fullname").value.toUpperCase()
})
*/

$("#img").addEventListener("input", ()=>{
    const urlImage = $("#img").value
    $(".box").style.backgroundImage = `url(${urlImage})`
    $(".box").style.width ="200px"
    $(".box").style.height ="300px"
    $(".box").style.backgroundSize ="cover"
    $(".box").style.backgroundPosition ="center"

})

$("#number").addEventListener("input", ()=>{
    $("body").style.fontSize = `${$("#number").value}px`
})



//color
$("#color").addEventListener("input", ()=>{
    $("body").style.backgroundColor = $("#color").value
})

//rango

$("#range").addEventListener("input", ()=>{
    const rangeValue = $("#range").value
    $("#harry").style.filter = `grayscale(${rangeValue}%)`
    $(".box").style.filter = `grayscale(${rangeValue}%)`
})

//checkbox
/*
$("#check").addEventListener("input", ()=>{
    const checking = $("#check").checked
    if (checking){
        $("body").style.backgroundColor = "aqua"
    }else{
        $("body").style.backgroundColor = "red"
    }
})
*/

$("#font").addEventListener("input", ()=>{
    $("body").style.fontFamily = $("#font").value
})

//radio button es checked

