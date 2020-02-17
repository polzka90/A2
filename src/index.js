
const express = require('express');
const app = express();
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const Request = require("request");
var request = require('sync-request');



const schema = buildSchema(`
    type Query {
        cep(numero: String!): String
    }
`)

let getCep = (args) => {
   let numerocep = args.numero

    var res = request('GET', 'https://viacep.com.br/ws/'+ numerocep +'/json/');

    return res.getBody('utf8');
}

const root = {
        cep : getCep
}

app.use('/graphql',express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}))



app.listen({port: 4000}, () => console.log(`servidor rodando na porta localhost:4000/graphql`))