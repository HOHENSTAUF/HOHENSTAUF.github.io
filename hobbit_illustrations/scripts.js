function textComeIn() {
  let element = document.getElementById("demo");
  element.style.transform = "translate(20vw)";
  element.style.opacity = "0";
}
function textComeOut() {
  let element = document.getElementById("demo");
  element.style.transform = "translate(0vw)";
  element.style.opacity = "1";
}
function nextCenterfold(number) {
  let element = document.getElementById("demo");
  let main_illustration = document.getElementById("main_illustration");
  number+=1;
  main_illustration.src = "fish2.jpg"; //"Chapter"+number+".jpg"
  element.innerHTML = "blob"; // somehow with text file "Chapter"+number+".txt"
}
function previousCenterfold(number) {
  let element = document.getElementById("demo");
  let main_illustration = document.getElementById("main_illustration");
  number-=1;
  main_illustration.src = "fish2.jpg"; //"Chapter"+number+".jpg"
  element.innerHTML = "blob"; // somehow with text file "Chapter"+number+".txt"
}

//support functions
function textComeInMetamorphose() {}
