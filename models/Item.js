const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
        symbol: {
            type: 'String'
        },
        companyName: {
            type: 'String'
        },
        calculationPrice: {
            type: 'String'
        },
        open: {
            type: 'Number'
        },
        openTime: {
            type: 'Number'
        },
        close: {
            type: 'Number'
        },
        closeTime: {
            type: 'Number'
        },
        high: {
            type: 'Number'
        },
        low: {
            type: 'Number'
        },
        latestPrice: {
            type: 'Number'
        },
        latestSource: {
            type: 'String'
        },
        latestTime: {
            type: 'Date'
        },
        latestUpdate: {
            type: 'Number'
        },
        latestVolume: {
            type: 'Number'
        },
        iexRealtimePrice: {
            type: 'Mixed'
        },
        iexRealtimeSize: {
            type: 'Mixed'
        },
        iexLastUpdated: {
            type: 'Mixed'
        },
        delayedPrice: {
            type: 'Number'
        },
        delayedPriceTime: {
            type: 'Number'
        },
        extendedPrice: {
            type: 'Number'
        },
        extendedChange: {
            type: 'Number'
        },
        extendedChangePercent: {
            type: 'Number'
        },
        extendedPriceTime: {
            type: 'Number'
        },
        previousClose: {
            type: 'Number'
        },
        change: {
            type: 'Number'
        },
        changePercent: {
            type: 'Number'
        },
        iexMarketPercent: {
            type: 'Mixed'
        },
        iexVolume: {
            type: 'Mixed'
        },
        avgTotalVolume: {
            type: 'Number'
        },
        iexBidPrice: {
            type: 'Mixed'
        },
        iexBidSize: {
            type: 'Mixed'
        },
        iexAskPrice: {
            type: 'Mixed'
        },
        iexAskSize: {
            type: 'Mixed'
        },
        marketCap: {
            type: 'Mixed'
        },
        peRatio: {
            type: 'Number'
        },
        week52High: {
            type: 'Number'
        },
        week52Low: {
            type: 'Number'
        },
        ytdChange: {
            type: 'Number'
        },
        lastTradeTime: {
            type: 'Number'
        }
});

module.exports = Item = mongoose.model('item', ItemSchema);