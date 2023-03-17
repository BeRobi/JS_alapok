window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
});

function elemekElerese1() {
  const ELEM = document.getElementById("f1");
  console.log(ELEM.innerHTML);
}

function elemekElerese2() {
  const ELEM = document.querySelectorAll("#ide")[0];
  console.log(ELEM);
  ELEM.innerHTML += "<p>Jó reggelt!</p>";
}

function elemekElerese3() {
  const ELEM = document.getElementsByClassName("ide")[0];
  ELEM.innerHTML += "<p>Jó reggelt!</p>";
}
