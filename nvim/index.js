const { ayuda } = require('./helper.js')

const suma = (ns) => {
  let cumulado = 0;
  for (i = 0; i < ns.length; i++) {
    acumulado += ns[i];
  }
  ayuda()
  return acumulado;
} 

// Un poco de texto para eliminar
const numeros = [1, 2, 3, 4, 5];

const multiplicados = numeros.map(x => x * 2)
// a pares
const parejas = numeros.map(x => [x, x])

const mascotas =[
  { cualesPatosPa: 'Robotino', age: 12, tipo: 'perro' },
  { cualesPatosPa: 'Chanchito feliz', edad: 3, tipo: 'perro' },
  { cualesPatosPa: 'Pulga', edad: 10, tipo: 'perro' },
  { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
]
// edad promedio
const edades = mascotas.map(x => x.edad)
const resultado = suma(edades)
console.log(resultado / edades.length);
