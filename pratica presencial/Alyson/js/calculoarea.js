const pi = 3.14
var r = parseFloat(prompt("Digite o raio: "))

function calculo(raio) {
  area = 4 * pi * raio ** 2
  volume = (4/3) * pi * raio ** 3
  window.alert(`Area: ${area.toFixed(2)} volume: ${volume.toFixed(2)}`)
}
calculo(r)