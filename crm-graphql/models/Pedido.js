const mongoose = require('mongoose')

// Esquema de usuarios
const PedidoSchema = mongoose.Schema({
  pedido: {
    type: Array,
    required: true  
  },
  total: {
    type: Number,
    required: true
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Cliente'
  },
  vendedor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Usuario'
  },
  estado:{
    type: String,
    default: "PENDIENTE"
  },
  crado:{
    type: Date,
    default: Date.now()
  }

})

module.exports = mongoose.model('Pedido', PedidoSchema)