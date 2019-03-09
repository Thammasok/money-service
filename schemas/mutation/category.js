const { 
  GraphQLID,
  GraphQLString, 
  GraphQLNonNull 
} = require('graphql')

// TYPE
const { CategoryType } = require('../type/category')

// MODELS
const categoryModel = require('../../models/category')

const addCategory = {
  type: CategoryType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    icon: { type: GraphQLString }
  },
  resolve(parent, args) {
    const category = new categoryModel({
      name: args.name,
      type: args.type,
      icon: args.icon
    })

    return category.save()
  }
}

const updateCategory = {
  type: CategoryType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    icon: { type: GraphQLString }
  },
  resolve(parent, args) {
    const category = {
      name: args.name,
      type: args.type,
      icon: args.icon
    }

    return categoryModel.findOneAndUpdate({_id: args.id}, {$set: category})
  }
}

module.exports = {
  addCategory,
  updateCategory
}