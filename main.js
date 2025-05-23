const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

const contadores = document.querySelectorAll(".contador");
const tempos = [
    new Date("2025-07-05T00:00:00"),
    new Date("2025-08-05T00:00:00"),
    new Date("2025-09-30T00:00:00"),
    new Date("2025-10-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    const agora = new Date();
    const diferenca = tempoObjetivo - agora;

    if (diferenca <= 0) return [0, 0, 0, 0];

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / 1000 / 60) % 60;
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const [d, h, m, s] = calculaTempo(tempos[i]);
        document.getElementById("dias" + i).textContent = d;
        document.getElementById("horas" + i).textContent = h;
        document.getElementById("min" + i).textContent = m;
        document.getElementById("seg" + i).textContent = s;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

document.addEventListener("DOMContentLoaded", comecaCronometro);
