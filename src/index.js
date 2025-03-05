const timer = document.getElementById("timer")

function calcularTempo(data) {
    const agora = new Date();
    const diferenca = agora - data; // Diferença em milissegundos

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const diasTotais = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const dias = diasTotais % 365; // Reseta ao completar um ano
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const segundos = Math.floor(diferenca / 1000) % 60;


    return `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}


const data = new Date("2024-03-05T15:10:00");

setInterval(() => {
    timer.innerHTML = calcularTempo(data)
}, 1000);
