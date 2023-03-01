//DOM DOCUMENT OBJECT MODEL

// getElementByTagName()
// gelElementByClassName()
// getElementById()
// queryselector() => permite llamar elementos por clase por etiqueta o por id o por name (metodo universal) // solo muestra el primero de su tipo

// const h1 = document.getElementById("encabezado")

// const h1 = document.querySelector("h1")
const p = document.querySelector(".parrafo")
//  const inputText = document.querySelector("#nombre")
 
// innerHTML

// p.innerHTML = "<b> Soy el texto modificado desde javascript</b>"

// innerText // solo modifica el texto no me deja cambiar atributos
// p.innerText = "Soy el texto modificado desde javascript"
// const nombreDeUsuario = "Ana Laura"
// const nombreDeUsuario = prompt("ingrese su nombre:")

// agrega algo nuevo +=
// p.innerText +=` ${nombreDeUsuario}`

//style

// h1.style.color = "red"
// h1.style.backgroundColor ="#000"
// h1.style.fontFamily = "Arial"

// h1.style.display = "block"

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZPAtbvyN0dDNl5_ivn3CVcKms5991qFkoQ&usqp=CAU

// const img = document.querySelector("#meme")

// .img.style.backgroundImage = "url(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZPAtbvyN0dDNl5_ivn3CVcKms5991qFkoQ&usqp=CAU` "

// classlist (add, remove, toggle, contains)

const blueBox = document.querySelector(".azul")
const orangeBox = document.querySelector(".naranja")

// blueBox.classList.add("grande")

// orangeBox.classList.remove("naranja")

// blueBox.classList.add("visibility--hidden")

// setTimeout(()=>{
//     blueBox.classList.add("visibility--hidden")
// }, 3000)


// const cambiarTamanio =()=>{
//     blueBox.classList.toggle("grande")
// }

//contains => devuelve un booleano segun si el elemento contine la clse que le pasamos como argumento

// blueBox.classList.contains("azul") // true
// blueBox.classList.contains("visibillity--hiden") // false

const password = document.querySelector("#passwordId")
// console.log(password.id)
// console.log(password.name)
// console.log(password.type)

//console.log (password.type = "text")
//console.log (password.type = "password")

//setAttribute  getAttribute  removeAttribute

// password.setAttribute("class", "azul")
// password.removeAttribute("name")
// password.getAttribute("id")

//p.setAttribute ("data-id", 5)

//trick and tip

// declaras variables

// funciones

// eventos

const $ =(selector)=> document.querySelector(selector)

$("#passwordId").type = "text"
$("#passwordId").type = "password"

$(".azul").classList.add("grande")

