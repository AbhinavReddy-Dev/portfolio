//for hamburger menu

let ham = document.getElementById("hamburger");

function openmenu() {
  ham.style.width = "100%";
  document.body.style.position = "fixed";
}
function closemenu() {
  ham.style.width = "0";
  document.body.style.position = "inherit";
}

//
