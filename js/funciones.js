// Creando una función

// Function declaration
function saludar(nombre){
  console.log(`Bienvenido ${nombre}`)
}

// Llamada function declaration
saludar('Juan')

// Function expression
const cliente = function(nombre){
  console.log(`Mostrando datos del cliente ${nombre}`)
}

// llamada function expression
cliente('Juan')

// Parametros por default en una función
function actividad(nombre = 'Juan', actividad = 'enseñar química'){
  console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('pedro', 'Aprendiendo JS')
actividad()