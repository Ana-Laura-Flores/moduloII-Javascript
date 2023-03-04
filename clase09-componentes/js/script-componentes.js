const $ = (selector)=> document.querySelector(selector)

$("#btn-open-modal").addEventListener("click", ()=>{
    $("#modal-container").style.display = "block"
})

$("#btn-close-modal").addEventListener("click", ()=>{
    $("#modal-container").style.display = "none"
})
window.addEventListener("click", (e)=>{
    if(e.target == $("modal-container")){
        $("#modal-container").style.display = "none"
    }
})
//window.addEventListener("keydown"), (e)=>{
    
//}

$(".accordion").addEventListener("click", ()=>{
    $(".accordion").classList.toggle("active")
    if ($(".content").style.display === "block"){
        $(".content").style.display = "none"
    }else{
        $(".content").style.display = "block"
    }
})

