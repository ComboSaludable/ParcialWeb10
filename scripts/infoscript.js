function getURLParameter(url, name) {return (RegExp(name + '=' + '(.+?)(&|$)').exec(url) || [, null])[1];}

$(document).ready(() => {

  var url = window.location.href
  var nombre = getURLParameter(url, 'nombre');
  var correo = getURLParameter(url, 'correo');
  var numero = getURLParameter(url, 'numero');
  var gusto = getURLParameter(url, 'gusto');
  var porcentaje = getURLParameter(url, 'porcentaje');

  $('#nombre').text(nombre);
  $('#correo').text(correo);
  $('#numero').text(numero);
  $('#gusto').text(gusto);
  $('#porcentaje').text(porcentaje);

})