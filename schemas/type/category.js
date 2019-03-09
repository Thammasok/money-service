const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID
} = require('graphql')

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    icon: { type: GraphQLString }
  })
})

module.exports = {
  CategoryType
}
