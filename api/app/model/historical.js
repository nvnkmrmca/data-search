const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const HistoricalSchema = mongoose.Schema({
	quote: Schema.Types.String,
	date: Schema.Types.Date,
	open: Schema.Types.Number,
	high: Schema.Types.Number,
	low: Schema.Types.Number,
	close: Schema.Types.Number,
	adjClose: Schema.Types.Number,
	volume: Schema.Types.Number
});

module.exports = mongoose.model('Historical', HistoricalSchema);