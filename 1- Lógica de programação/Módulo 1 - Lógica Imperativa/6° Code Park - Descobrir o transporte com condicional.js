var v_ou_f;


v_ou_f = window.prompt('Seu transporte possui 2 rodas?');
if (v_ou_f == 'sim') {
  v_ou_f = window.prompt('possui pedal?');
  if (v_ou_f == 'sim') {
    window.alert('seu transporte � uma bicicleta.');
  } else {
    window.alert('seu transporte � uma moto.');
  }
} else {
  window.alert('seu transporte � uma trator.');
}