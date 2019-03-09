const { 
  GraphQLID,
  GraphQLList
} = require('graphql')

// TYPE
const { CategoryType } = require('../type/category')

// MODELS
const categoryModel = require('../../models/category')

const category = {
  type: CategoryType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return categoryModel.findById(args.id)
  }
}

const categories = {
  type: new GraphQLList(CategoryType),
  resolve(parent, args) {
    return categoryModel.find({})
  }
}

module.exports = {
  category,
  categories
}