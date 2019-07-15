const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Create a post
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        symbol: req.body.symbol,
        companyName: req.body.companyName,
        calculationPrice: req.body.calculationPrice,
        open: req.body.open,
        openTime: req.body.openTime,
        close: req.body.close,
        closeTime: req.body.closeTime,
        high: req.body.high,
        low: req.body.low,
        latestPrice: req.body.latestPrice,
        latestSource: req.body.latestSource,
        latestTime: req.body.latestTime,
        latestUpdate: req.body.latestUpdate,
        latestVolume: req.body.latestVolume,
        iexRealtimePrice: req.body.iexRealtimePrice,
        iexRealtimeSize: req.body.iexRealtimeSize,
        iexLastUpdated: req.body.iexLastUpdated,
        delayedPrice: req.body.delayedPrice,
        delayedPriceTime: req.body.delayedPriceTime,
        extendedPrice: req.body.extendedPrice,
        extendedChange: req.body.extendedChange,
        extendedChangePercent: req.body.extendedChangePercent,
        extendedPriceTime: req.body.extendedPriceTime,
        previousClose: req.body.previousClose,
        change: req.body.change,
        changePercent: req.body.changePercent,
        iexMarketPercent: req.body.iexMarketPercent,
        iexVolume: req.body.iexVolume,
        avgTotalVolume: req.body.avgTotalVolume,
        iexBidPrice: req.body.iexBidPrice,
        iexBidSize: req.body.iexBidSize,
        iexAskPrice: req.body.iexAskPrice,
        iexAskSize: req.body.iexAskSize,
        marketCap: req.body.marketCap,
        peRatio: req.body.peRatio,
        week52High: req.body.week52High,
        week52Low: req.body.week52Low,
        ytdChange: req.body.ytdChange,
        lastTradeTime: req.body.lastTradeTime
    });


    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/::id
// @desc Delete an item
// @access Public
router.delete('./:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
}) 

module.exports = router;