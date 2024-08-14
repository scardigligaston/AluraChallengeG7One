//  Declaración de variables
const inputTexto = document.querySelector(".texto-input");
const btnEncriptar = document.querySelectorAll("button")[0];
const btnDesencriptar = document.querySelectorAll("button")[1];
const btnCopiar = document.getElementById("btnCopiar");
const containerImg = document.getElementById("imgEncriptado");
const resultadoTexto = document.querySelector(
  ".container__texto--encriptado > p"
);
const h2Resultado = document.querySelector(
  ".container__texto--encriptado > h2"
);

// Función encriptar
function encriptar() {
  let texto = inputTexto.value;

  // Validación
  if (/^[a-z\s]*$/.test(texto)) {
    let textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    // Mostrar el resultado
    resultadoTexto.textContent = textoEncriptado;
    h2Resultado.textContent = "Texto encriptado";

    btnDesencriptar.disabled = false;
    containerImg.classList.add("hidden");
  } else {
    alert(
      "Solo se permiten letras minúsculas sin acentos ni caracteres especiales."
    );
  }
}

// Función de descifrado
function desencriptar() {
  let texto = inputTexto.value;

  if (/^[a-z\s]*$/.test(texto)) {
    let textoDesencriptado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    // Mostrar el resultado
    resultadoTexto.textContent = textoDesencriptado;
    h2Resultado.textContent = "Texto desencriptado";
  } else {
    alert(
      "Solo se permiten letras minúsculas sin acentos ni caracteres especiales."
    );
  }
}

// Función para copiar texto
function copiarTexto() {
  let textoParaCopiar = resultadoTexto.textContent;

  if (textoParaCopiar) {
    navigator.clipboard
      .writeText(textoParaCopiar)
      .then(() => {
        alert("Texto copiado");
      })
      .catch((err) => {
        alert("Error al copiar el texto: ", err);
      });
  } else {
    alert("No hay texto para copiar.");
  }
}

// Conectar funciones a los botones
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarTexto);
