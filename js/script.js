function tempo() {
  var data = new Date();
  var horas = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();

  var dia = data.getDay();
  var mes = data.getMonth();
  var ano = data.getFullYear();

  if (dia < 10) {
    dia = '0' + dia;
  }

  if (mes < 10) {
    mes = '0' + mes;
  }

  document.getElementById('day').innerHTML = dia;
  document.getElementById('month').innerHTML = mes;
  document.getElementById('year').innerHTML = ano;

  if (horas < 10) {
    horas = '0' + horas;
  }

  if (minutos < 10) {
    minutos = '0' + minutos;
  }

  if (segundos < 10) {
    segundos = '0' + segundos;
  }

  document.getElementById('relogio').innerHTML =
    horas + ':' + minutos + ':' + segundos;
}

window.setInterval('tempo()', 1000);
