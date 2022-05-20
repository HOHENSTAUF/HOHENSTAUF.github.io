"use strict";

function showHide(idValue) {
  let element = document.getElementById(idValue);
  if (element.style.display == 'none') {
    element.style.display = '';
  } else {
    element.style.display = 'none';
  }
}

window.addEventListener('scroll', (event) => {
document.getElementsByClassName('cover')[0].style.display = "none";
});

function onLoadFunct(){

let main_punkts = document.getElementsByClassName('main-punkt');
let subdivision = document.getElementById("subdivision");



if (main_punkts && subdivision) {
  main_punkts[0].addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    subdivision.innerHTML = "Предисловие.";
  }, false);

main_punkts[1].addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  subdivision.innerHTML = "1. Мир есть все то, что происходит.";
}, false);
main_punkts[2].addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  subdivision.innerHTML = "2. То, что имеет место, что является фактом, - это существование атомарных фактов.";
}, false);
main_punkts[3].addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  subdivision.innerHTML = "3. Логический образ фактов есть мысль.";
}, false);
main_punkts[4].addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  subdivision.innerHTML = "4. Мысль есть осмысленное предложение.";
}, false);
main_punkts[5].addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  subdivision.innerHTML = "5. Предложение есть функция истинности элементарных предложений.";
}, false);
main_punkts[6].addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  subdivision.innerHTML = "6. Общая форма функции истинности есть: [p, x, N(x)].  Это есть общая форма предложения.";
}, false);
main_punkts[7].addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  subdivision.innerHTML = "7. О чем невозможно говорить, о том следует молчать.";
}, false);
}
}
