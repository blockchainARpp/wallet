const core = require('cyberway-core-service');
const MongoDB = core.services.MongoDB;

module.exports = MongoDB.makeModel(
    'Transfer',
    {
        contractReceiver: {
            type: String,
        },
        sender: {
            type: String,
            required: true,
        },
        receiver: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
        symbol: {
            type: String,
            required: true,
        },
        memo: {
            type: String,
        },
        blockNum: {
            type: Number,
            required: true,
        },
        trxId: {
            type: String,
            default: null,
        },
        isIrreversible: {
            type: Boolean,
            default: false,
        },
        timestamp: {
            type: Date,
            required: true,
        },
    },
    {
        index: [
            {
                fields: {
                    sender: 1,
                    receiver: 1,
                    symbol: 1,
                    _id: -1,
                },
                options: {
                    background: true,
                },
            },
            {
                fields: {
                    receiver: 1,
                    symbol: 1,
                    _id: -1,
                },
                options: {
                    background: true,
                },
            },
            {
                fields: {
                    sender: 1,
                    symbol: 1,
                    _id: -1,
                },
                options: {
                    background: true,
                },
            },
            {
                fields: {
                    symbol: 1,
                    _id: -1,
                },
                options: {
                    background: true,
                },
            },
            // for irreversible search
            {
                fields: {
                    blockNum: 1,
                },
                options: {
                    background: true,
                },
            },
        ],
    }
);
