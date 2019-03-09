const { 
  GraphQLID,
  GraphQLString, 
  GraphQLNonNull 
} = require('graphql')

// TYPE
const { WalletType } = require('../type/wallet')

// MODELS
const walletModel = require('../../models/wallet')

const addWallet = {
  type: WalletType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    const wallet = new walletModel({
      name: args.name,
      type: args.type
    })

    return wallet.save()
  }
}

const updateWallet = {
  type: WalletType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    const wallet = {
      name: args.name,
      type: args.type
    }

    return walletModel.findOneAndUpdate({_id: args.id}, {$set: wallet})
  }
}

module.exports = {
  addWallet,
  updateWallet
}