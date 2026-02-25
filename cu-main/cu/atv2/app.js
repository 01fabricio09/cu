const visor = document.getElementById('visor');

function digitar(valor) {
    // Permite digitar o sinal de menos ou mais se o visor estiver vazio
    visor.value += valor;
}

function limpar() {
    visor.value = "";
}

function calcular() {
    try {
        let expressao = visor.value;

        // Trata a porcentagem: substitui "X%" por "X/100"
        if (expressao.includes('%')) {
            expressao = expressao.replace(/(\d+)%/g, "($1/100)");
        }

        // eval() resolve a matemática, respeitando sinais negativos iniciais
        let resultado = eval(expressao);
        
        visor.value = resultado;
    } catch (e) {
        alert("Erro na expressão! Verifique os sinais.");
        limpar();
    }
}