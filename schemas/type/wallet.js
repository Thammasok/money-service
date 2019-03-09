const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID
} = require('graphql')

const WalletType = new GraphQLObjectType({
  name: 'Wallet',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString }
  })
})

module.exports = {
  WalletType
}
