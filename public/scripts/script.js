let altura = 0;
let largura = 0;

function ajustaTamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoTela();

if (tipo == "macho") {
    window.location.href = "macho1.html";
} else if (tipo == "femea") {
    window.location.href = "femea1.html";
}
