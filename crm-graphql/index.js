const { ApolloServer } = require('apollo-server') // Importamos apolo server
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolver')
const jwt = require('jsonwebtoken')

const conectarDb = require('./config/db')
require('dotenv').config({ path: 'variables.env'})

// Conectar a la base de datos
conectarDb()

// Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
    const token = req.headers['authorization'] || ''
    if(token){
      try {
        const usuario = jwt.verify(token, process.env.SECRETA)
        return{
          usuario
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
})

// Arrcancar el servidor
server.listen().then(({url}) => {
  console.log(`Servidor listo en la URL ${url}`);
})