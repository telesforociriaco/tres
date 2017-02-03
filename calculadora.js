var resultado=0;
function suma(){

  a = document.getElementById('numero1').value;
  b = document.getElementById('numero2').value;
  resultado = parseInt(a)+ parseInt(b);
//  alert(typeof(a));
//  resultado = number(a)+number(b);
    alert(resultado);
  return resultado;

}

function resta(a,b){
  a = document.getElementById('numero1').value;
  b = document.getElementById('numero2').value;
  resultado = a-b;
    alert(resultado);
  return resultado;

}

function multiplicacion(a,b){
  a = document.getElementById('numero1').value;
  b = document.getElementById('numero2').value;
  resultado = a*b;
  alert(resultado);
  return resultado;

}

function divicion(a,b){
  a = document.getElementById('numero1').value;
  b = document.getElementById('numero2').value;
  resultado = a/b;
    alert(resultado);
  return resultado;

}
alert("si pero no te enojes");
