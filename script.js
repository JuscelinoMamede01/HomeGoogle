function Open(){
  
    let abrir = document.querySelector(".appWindow");
    let closeImg=document.querySelector(".gridMenuIcon")
    let abrirImg = document.querySelector(".gridMenuIcon2")

    abrir.style.display = "flex";
    closeImg.style.display = "none";
    abrirImg.style.display = "flex";
}

function Close(){
  
    let abrir = document.querySelector(".appWindow");
    let closeImg=document.querySelector(".gridMenuIcon")
    let abrirImg = document.querySelector(".gridMenuIcon2")

    abrir.style.display = "none";
    closeImg.style.display = "flex";
    abrirImg.style.display = "none";
}