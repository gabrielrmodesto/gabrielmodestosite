let botaoMenu = document.querySelector(".navbarIcon");
let botaoAbrirMenu = document.querySelector(".bx-menu");
let botaoFecharMenu = document.querySelector(".bx-x");
let menuLateral = document.querySelector("aside");
let menuAberto = false;
let linksMenuLateral = document.querySelector(".menu-links");
let imagemPerfilLateral = document.querySelector(".image-perfil-link");
const tamanhoTela = document.querySelector("body").clientWidth;

console.log(tamanhoTela);

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
  if(tamanhoTela >= 501 && tamanhoTela <= 900){
    menuLateral.style.left = "-950px";
  }
  if(tamanhoTela <= 500){
    menuLateral.style.left = "-600px";
  }
  botaoMenu.classList.remove("bx-x");
  botaoMenu.classList.add("bx-menu");
  menuAberto = false;
}

if(tamanhoTela <= 900){
  botaoMenu.addEventListener("click", menuResponsivo);
  linksMenuLateral.addEventListener("click", fecharMenu);
  imagemPerfilLateral.addEventListener("click", fecharMenu);
}
