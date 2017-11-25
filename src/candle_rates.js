function CandleRates(coinCheck) {
    this._coinCheck = coinCheck;
}

CandleRates.prototype = {
    urlRoot: '/exchange/candle_rates',
    all: function(params) {
        return this._coinCheck.request('get', this.urlRoot, params);
    }

};

exports.CandleRates = CandleRates;
