const nombre = 'Juan'
const trabajo = 'Ninguno'

// Concatenar
console.log('Nombre: ' + nombre + ', trabajo: ' + trabajo)

// Nueva concatenación
console.log(`Nombre: ${nombre}, trabajo: ${trabajo}`)

const contenedor = document.querySelector('#app')


let html = `<ul>
              <li> Nombre: ${nombre} </li>
              <li> Trabajo: ${trabajo} </li>
            </ul>`

contenedor.innerHTML = html