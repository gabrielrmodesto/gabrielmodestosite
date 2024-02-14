let botaoMenu = document.querySelector(".navbarIcon");
let botaoAbrirMenu = document.querySelector(".bx-menu");
let botaoFecharMenu = document.querySelector(".bx-x");
let menuLateral = document.querySelector("aside");
let menuAberto = false;
let linksMenuLateral = document.querySelector(".menu-links");
let imagemPerfilLateral = document.querySelector(".image-perfil-link");

function menuResponsivo(){
  if(menuAberto === false){
    abrirMenu();
  }else{
    fecharMenu();
  }
}

function abrirMenu(){
  menuLateral.style.left = 0;
  botaoMenu.classList.remove("bx-menu");
  botaoMenu.classList.add("bx-x");
  menuAberto = true;
}

function fecharMenu(){
  menuLateral.style.left = "-600px";
  botaoMenu.classList.remove("bx-x");
  botaoMenu.classList.add("bx-menu");
  menuAberto = false;
}

botaoMenu.addEventListener("click", menuResponsivo);
linksMenuLateral.addEventListener("click", fecharMenu);
imagemPerfilLateral.addEventListener("click", fecharMenu);
