const { 
  GraphQLID,
  GraphQLList
} = require('graphql')

// TYPE
const { WalletType } = require('../type/wallet')

// MODELS
const walletModel = require('../../models/wallet')

const wallet = {
  type: WalletType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return walletModel.findById(args.id)
  }
}

const wallets = {
  type: new GraphQLList(WalletType),
  resolve(parent, args) {
    return walletModel.find({})
  }
}

module.exports = {
  wallet,
  wallets
}