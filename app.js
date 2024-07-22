let text = document.getElementById("texto");
let encrit = document.getElementById("encriptar");
let desencrit = document.getElementById("desencriptar");
let result = document.getElementById("resultado");
let copy = document.getElementById("copiar");

/*text.addEventListener("click", function () {
  text.value = "";
  return;
  break;
});*/
//funcion
encrit.addEventListener("click", function () {
  const inputext = text.value;
  const remplasar = inputext.replace(/e/gi, "enter").replace(/a/gi, "ai").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "uful");
  result.value = remplasar;
  return;
});
desencrit.addEventListener("click", function () {
  const inputext = text.value;
  const reemplasar = inputext.replace(/uful/gi, "u").replace(/ober/gi, "o").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/enter/gi, "e");
  result.value = reemplasar;
  return;
});
copy.addEventListener("click", function () {
  navigator.clipboard.writeText(result.value)
  .then(() => {
    console.log('Texto copiado al portapapeles');
  })
  .catch(err => {
    console.error('Error al copiar el texto: ', err);
  });
  return;
});