import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

const body = document.querySelector("body");

window.addEventListener("load", function (event) {
  body.style.background = "red";
});

const images = document.querySelectorAll("img");

images.forEach((s) => {
  s.addEventListener("mouseover", (event) => {
    s.style.filter = "grayscale(100%)";
  });
  s.addEventListener("mouseleave", (event) => {
    s.style.filter = "grayscale(0%)";
  });
});

//*****  inputt   *****/

const input = document.querySelector("input");
input.addEventListener("focus", (event) => {
  event.target.style.border = "5px solid red";
});

input.addEventListener("blur", (event) => {
  input.style.border = "2px solid black ";
});

window.addEventListener("blur", (e) => {
  document.querySelector("body").style.backgroundColor = "blue";
});
window.addEventListener("focus", (e) => {
  document.querySelector("body").style.backgroundColor = "red";
});

window.addEventListener("resize", (event) => {
  input.value = `${window.innerWidth} x ${window.innerHeight}`;
  if (window.innerWidth < 700) {
    document.querySelector("body").style.backgroundColor = "pink";
  } else {
    document.querySelector("body").style.backgroundColor = null;
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key == 1) {
    e.target.style.border = "10px solid blue";
  }
});
