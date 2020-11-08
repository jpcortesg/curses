const mongoose = require('mongoose')

// Esquema de usuarios
const ProductosSechema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true // Elimina los espacios
  },
  existencia: {
    type: Number,
    require: true,
    trim: true
  },
  precio: {
    type: Number,
    require: true,
    trim: true
  },
  creado: {
    type: Date,
    default: Date.now()
  }
})

ProductosSechema.index( { nombre: 'text' } )

module.exports = mongoose.model('Producto', ProductosSechema)