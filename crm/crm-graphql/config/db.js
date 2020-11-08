const mongoose = require('mongoose') // Trabajar con la base de datos
require('dotenv').config({ path: 'variables.env'}) // Variables de entorno

const conectarDb = async () => { // Conecta con la base de datos
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true
    })
    console.log('Db Conectada');
  } catch (error) { // Si hay error al conectar con la db
    console.log('Hubor un error', error);
    process.exit(1) // Detener la aplicación
  }
}

module.exports = conectarDb