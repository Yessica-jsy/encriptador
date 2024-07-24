let foto = document.getElementById('puppy')
let text = document.getElementById("texto");
let encrit = document.getElementById("encriptar");
let desencrit = document.getElementById("desencriptar");
let result = document.getElementById("resultado");
let copy = document.getElementById("copiar");

text.addEventListener("click", function () {
  text.value = "";
  return;
});
//funcion
function initialize() {
  assignText(
    "texto","Ingresar el texto que se desea desencriptar o encriptar");
  assignText("resultado", "No se ha encontrado el texto"); 
  document.getElementById('puppy').removeAttribute('hidden')
}

function assignText(element, text) {
  let elementHtml = document.getElementById(element); // Select the HTML element
  elementHtml.value = text; // Assign the text to the element
}
encrit.addEventListener("click", function () {
  const inputext = text.value;
  if (inputext == "") {
    initialize();
    return;
  }
  const remplasar = inputext
  .replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi, "ai")
  .replace(/o/gi, "ober")
  .replace(/u/gi, "uful");
  result.value = remplasar;
  document.getElementById('puppy').setAttribute('hidden', 'true')
  document.getElementById('copiar').removeAttribute('hidden')
  return;
});
desencrit.addEventListener("click", function () {
  const inputext = text.value;
  if (inputext == "") {
    initialize();
    return;
  }
  const reemplasar = inputext
  .replace(/uful/gi, "u")
  .replace(/ober/gi, "o")
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a")
  .replace(/enter/gi, "e");
  result.value = reemplasar;
  document.getElementById('puppy').setAttribute('hidden', 'true')
  document.getElementById('copiar').removeAttribute('hidden')
  return;
});
copy.addEventListener("click", function () {
  navigator.clipboard
  .writeText(result.value)
  .then(() => {
    alert("Texto copiado al portapapeles");
  })
  .catch((err) => {
    console.error("Error al copiar el texto: ", err);
  });
    return;
  });
  //prueba

  


initialize();
