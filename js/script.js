// Crear variables var
var aprendiendo = 'JavaScript'
console.log("aprendiendo", aprendiendo)

// Constantes 
const aprendiendoconstante = 'Constante'
console.log("aprendiendoconstante", aprendiendoconstante)

// variables let
let otroAprendiendo = true
console.log("otroAprendiendo", otroAprendiendo)

// Scope var
var musica = 'Rock'

if(musica){
  var musica = 'nose'
  console.log("musica dentro if", musica)
}
console.log("musica fuera if", musica)

// Scope let
let otraMusica = 'Rock'

if(otraMusica){
  let otraMusica = 'nose'
  console.log("otraMusica dentro if", otraMusica)
}
console.log("otraMusica fuera if", otraMusica)
