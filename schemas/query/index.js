const { GraphQLObjectType } = require('graphql')

// Query
const category = require('./category')
const wallet = require('./wallet')
const transaction = require('./transaction')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: Object.assign(
    category,
    transaction,
    wallet
  )
})

module.exports = {
  RootQuery
}