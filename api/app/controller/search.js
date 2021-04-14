"use strict";

const Historical = require('../model/historical');
const _res = require("../util/response");

// search records by text.
exports.searchQuote = (req, res) => {
    Historical.find({quote: new RegExp(req.params.text, 'i')}, {
        _id: 0,
        quote: 1.0
    }).distinct('quote')
    .then(result => {
        return _res.success(res, result);
    }).catch(err => {
        return _res.error(res, err.message || 'Some error occurred while retrieving records.');
    });
};

// search records by text.
exports.search = (req, res) => {
    Historical.find({quote: req.params.text}).skip(req.params.page * req.params.size).limit(+req.params.size)
    .then(result => {
        Historical.countDocuments({quote: req.params.text}).then(totalCount => {
            return _res.success(res, {
                data: result,
                totalCount
            });
        }).catch(err => {
            return _res.success(res, {
                data: result,
                totalCount: 0
            });
        })
    }).catch(err => {
        return _res.error(res, err.message || 'Some error occurred while retrieving records.');
    });
};