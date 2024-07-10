function encryptText() {
  let text = document.getElementById("inputText").value;

  if (!/^[a-z\s]*$/.test(text)) {
      alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
      return;
  }

  let encryptedText = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

  let outputText = document.getElementById("outputText");
  outputText.value = encryptedText;

  let image = document.querySelector(".result-content img");
  image.style.display = "none";
  if (outputText.value.trim() !== "") {
    outputText.style.display = "block";
    document.querySelector(".result-content h2").style.display = "none";
    document.querySelector(".result-content p").style.display = "none";
  } else {
    outputText.style.display = "none";
    document.querySelector(".result-content h2").style.display = "block";
    document.querySelector(".result-content p").style.display = "block";
  }

  document.getElementById("copyButton").style.display = "inline-block";
}

function decryptText() {
  let text = document.getElementById("inputText").value;

  if (!/^[a-z\s]*$/.test(text)) {
      alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
      return;
  }

  let decryptedText = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

  let outputText = document.getElementById("outputText");
  outputText.value = decryptedText;

  if (outputText.value.trim() !== "") {
    outputText.style.display = "block";
    document.querySelector(".result-content h2").style.display = "none";
    document.querySelector(".result-content p").style.display = "none";
  } else {
    outputText.style.display = "none";
    document.querySelector(".result-content h2").style.display = "block";
    document.querySelector(".result-content p").style.display = "block";
  }

  document.getElementById("copyButton").style.display = "inline-block";
}

function copyText() {
  let outputText = document.getElementById("outputText");
  outputText.select();
  outputText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texto copiado: " + outputText.value);
}
