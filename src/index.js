const timer = document.getElementById("timer")

function calcularTempo(data) {
    const agora = new Date();
    const diferenca = agora - data; // Diferença em milissegundos

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}


const data = new Date("2024-03-5T15:10:00")

setInterval(() => {
    timer.innerHTML = calcularTempo(data)
}, 1000);