const { GraphQLObjectType } = require('graphql')

//Mutation
const category = require('./category')
const transaction = require('./transaction')
const wallet = require('./wallet')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign(
    category,
    transaction,
    wallet
  )
})

module.exports = {
  Mutation
}