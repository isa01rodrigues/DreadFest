/***********SEÇÃO RELOGIO*********** */
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Obtenha a data atual
let dateToday = new Date();

// Adicione 10 dias à data atual
const dateFuture = new Date(dateToday);
dateFuture.setDate(dateToday.getDate() + 10);

const relogio = setInterval(function time() {
    // Obtenha a diferença entre as datas em milissegundos
    let diferenca = dateFuture - new Date();

    // Converta a diferença para horas, minutos e segundos
    let hrs = Math.floor(diferenca / (1000 * 60 * 60));
    let min = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Adicione zeros à esquerda se necessário
    hrs = hrs < 10 ? '0' + hrs : hrs;
    min = min < 10 ? '0' + min : min;
    s = s < 10 ? '0' + s : s;

    // Atualize os elementos HTML
    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = s;

}, 1000);  // Atualiza a cada segundo

/************ SEÇÃO BANNER***************** */
/**Banner */
$(document).ready(function () {
    $('.banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
  
    });
  })
  
  
  