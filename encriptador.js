function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function encriptarTexto() {
    const texto = document.getElementById("texto").value;
    const resultado = encriptar(texto);
    document.getElementById("resultado").innerText = resultado;
}

function desencriptarTexto() {
    const texto = document.getElementById("texto").value;
    const resultado = desencriptar(texto);
    document.getElementById("resultado").innerText = resultado;
}

function copiarTexto() {
    const resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado).then(() => {
        alert("Texto copiado al portapapeles");
    });
}