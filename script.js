// Declarando uma função que recebe informações:
function trocaConteudoNoId(id, NovoConteudo) {
    document.getElementById(id).innerHTML = NovoConteudo;
}

function trocaFormatacaoNoId(id, NovasClasses) {
    document.getElementById(id).classList = NovasClasses;
}