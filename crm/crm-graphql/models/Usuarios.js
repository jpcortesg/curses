const mongoose = require('mongoose')

// Esquema de usuarios
const UsuariosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true // Elimina los espacios   
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true, 
  },
  creado: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Usuario', UsuariosSchema)