const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql')
const dotenv = require('dotenv')
const schema = require('./schemas')

dotenv.config()
const app = express()
const port = process.env.PORT

// allow cross-origin requests
app.use(cors())

// connect mongodb
mongoose.set('useFindAndModify', false)

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0-ia3sy.mongodb.net/${process.env.MONGO_NAME}?retryWrites=true`
const opts = { useNewUrlParser: true }

mongoose.connect(url, opts);
mongoose.connection.once('open', () => {
  console.log('connected to database: ', process.env.MONGO_NAME)
})

// bind express with graphql
app.use('/api', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {
    console.log(`now listening for requests on port ${port}`)
})