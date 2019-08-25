import apolloServerKoa from 'apollo-server-koa'
import Koa from 'koa'
import resolvers from './resolvers'
import typeDefs from '/types'

const app = new Koa()
const server = new apolloServerKoa.ApolloServer({
  typeDefs,
  resolvers,
  uploads: {
    maxFileSize: 10000000,
    maxFiles: 20
  }
})

server.applyMiddleware({ app })

app.listen(process.env.PORT), error => ({
  if (error) throw error

  console.info(
    `Server http://localhost:${process.env.PORT} for ${process.env.NODE_ENV}.`
  )
})

