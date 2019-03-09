// const moment = require('moment')
const { GraphQLID, GraphQLList } = require('graphql')
const { GraphQLDate } = require('graphql-iso-date')

// TYPE
const { TransactionType } = require('../type/transaction')

// MODELS
const transactionModel = require('../../models/transaction')

const transaction = {
  type: TransactionType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return transactionModel.findById(args.id)
  }
}

const transactions = {
  type: new GraphQLList(TransactionType),
  args: { 
    walletId: { type: GraphQLID },
    from: { type: GraphQLDate }, 
    to: { type: GraphQLDate } 
  },
  resolve(parent, args) {
    // Moment
    // const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    // const endOfMonth   = moment().endOf('month').format('YYYY-MM-DD');

    // moment('2019-02-24').subtract(1, 'months').startOf('month').format('YYYY-MM-DD')
    // moment('2019-02-24').subtract(1, 'months').endOf('month').format('YYYY-MM-DD')

    return transactionModel.find({ 
      walletId: args.walletId,
      date: { 
        $gte: args.from,
        $lte: args.to
      } 
    })
  }
}

module.exports = {
  transaction,
  transactions
}