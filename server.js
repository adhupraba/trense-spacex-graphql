const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const path = require('path')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express()
server.applyMiddleware({ app })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started at  http://localhost:${PORT}${server.graphqlPath}`)
})