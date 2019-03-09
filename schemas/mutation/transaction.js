const { 
  GraphQLID,
  GraphQLString, 
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLNonNull 
} = require('graphql')

const { GraphQLDate } = require('graphql-iso-date')

// TYPE
const { TransactionType } = require('../type/transaction')

// MODELS
const transactionModel = require('../../models/transaction')

const addTransaction = {
  type: TransactionType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(GraphQLFloat) },
    date: { type: new GraphQLNonNull(GraphQLDate) },
    walletId: { type: new GraphQLNonNull(GraphQLString) },
    credit: { type: new GraphQLNonNull(GraphQLBoolean) },
    note: { type: GraphQLString }
  },
  resolve(parent, args) {
    const transaction = new transactionModel({
      name: args.name,
      type: args.type,
      amount: args.amount,
      date: args.date,
      walletId: args.walletId,
      credit: args.credit,
      note: args.note
    })

    return transaction.save()
  }
}

const updateTransaction = {
  type: TransactionType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(GraphQLFloat) },
    date: { type: new GraphQLNonNull(GraphQLDate) },
    walletId: { type: new GraphQLNonNull(GraphQLString) },
    credit: { type: new GraphQLNonNull(GraphQLBoolean) },
    note: { type: GraphQLString }
  },
  resolve(parent, args) {
    const transaction = {
      name: args.name,
      type: args.type,
      amount: args.amount,
      date: new Date(args.date),
      walletId: args.walletId,
      credit: args.credit,
      note: args.note
    }

    return transactionModel.findOneAndUpdate({_id: args.id}, {$set: transaction})
  }
}

module.exports = {
  addTransaction,
  updateTransaction
}