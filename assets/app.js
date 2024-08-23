// quando ainda esta em "Digite seu texto, exibe nenhuma msg encontrada"
const textoCripito = document.getElementById('areaCripitrografar');
const textdeco = document.getElementById("textdeco");
const areaDescripito = document.getElementById('areaDescripitrografarDIV');

//função da msg nanhuma msg encontrada
function msgTexto(){
    if (screen.width<1026)
        textdeco.innerHTML = "<div class='notfoundtext'> <h2>Nenhuma mensagem encontrada</h2><p>Digite um texto que deseja manipular!</p></div>"; 
    else
        textdeco.innerHTML = "<img src='assets/notfound.png' class='notfound' alt='ImgEspera'>"; 
} 
document.addEventListener('DOMContentLoaded', msgTexto)

//função de trocar a img pra textarea
function verificarTexto() {
    areaDescripito.style.height = 'auto';
    areaDescripito.style.height = `${areaDescripito.scrollHeight}px`;
    msgTexto()
    if (textoCripito.value.trim() === "") {
        areaDescripito.style.display = "none";
        } else { 
        areaDescripito.style.display = "block"
        textdeco.innerHTML = ""
        textdeco.appendChild(areaDescripito) 
    }
}
textoCripito.addEventListener('input', verificarTexto)
verificarTexto();

//funções de converter e desconverter
function desconverterTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function converterTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}
//função que ajeita a string pra estar nos paramentros 
function validarString(str) {
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z\s]/g, "");
}


//chamada das funções com cada elmento para converter
function cripito() {
    const texto = document.getElementById('areaCripitrografar');
    const textoFinal = document.getElementById("areaDescripitrografar");
    const TextoParam = validarString(texto.value)
    textoFinal.value = converterTexto(TextoParam);
    texto.value = ""
}

function descripito() {
    const texto = document.getElementById('areaCripitrografar');
    const textoFinal = document.getElementById("areaDescripitrografar");
    const TextoParam = validarString(texto.value)
    textoFinal.value = desconverterTexto(TextoParam);
    texto.value = ""
}

function copy() {
    const textarea = document.getElementById('areaDescripitrografar');
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    const copymsg = document.getElementById("copysucess")
    copymsg.style = 'display:block; text-align:center;'
    setInterval(function () { copymsg.style = 'display:none;'}, 4500);
   
}