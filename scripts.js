"use strict";

function showHide(idValue) {
  let element = document.getElementById(idValue);
  if (element.style.display == 'none') {
    element.style.display = '';
  } else {
    element.style.display = 'none';
  }
}
