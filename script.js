var li_dias = document.getElementById('dia')
var li_horas = document.getElementById('hora')
var li_minutos = document.getElementById('minuto')
var li_segundos = document.getElementById('segundo')


const abertura = '30 nov 2023';

function countDown(){
    const data_abertura = new Date(abertura)  // Aqui estou convertendo a data da abertura
    const currentDate = new Date() // Aqui estou obtendo a data e hora atual

    const cd_segundos_totais = (data_abertura - currentDate) / 1000 //Se eu apenas colocar a data de hoje - a data da da abetura, o código me retornará em milesimos, então devo dividir os milesimos por 1000

    const cd_segundos = Math.floor(cd_segundos_totais) % 60;
    const cd_minutos = Math.floor(cd_segundos_totais /  60) % 60;
    const cd_horas = Math.floor(cd_segundos_totais / 60 /60) % 24;
    const cd_dias = Math.floor(cd_segundos_totais / 60 / 60 / 24);

    li_dias.innerHTML = cd_dias + 'D.';
    li_horas.innerHTML = cd_horas + 'H.';
    li_minutos.innerHTML = cd_minutos + 'M.';
    li_segundos.innerHTML = cd_segundos + 'S';
}

countDown()
setInterval(countDown, 1000)