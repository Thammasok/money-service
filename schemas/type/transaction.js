const { 
  GraphQLObjectType, 
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID
} = require('graphql')

const { GraphQLDate } = require('graphql-iso-date')

const TransactionType = new GraphQLObjectType({
  name: 'Transaction',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    date: { type: GraphQLDate },
    walletId: { type: GraphQLID },
    credit: { type: GraphQLBoolean },
    note: { type: GraphQLString}
  })
})

module.exports = {
  TransactionType
}