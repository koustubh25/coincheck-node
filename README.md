# coincheck

Forked from https://www.npmjs.com/package/coincheck
Please check the above link on the core usage of the APIs.

## Installation

```
npm install https://github.com/koustubh25/coincheck-node.git --save
```

## Usage

```js
var CoinCheck = require('coincheck');

var coinCheck = new CoinCheck.CoinCheck('ACCESS_KEY', 'API_SECRET');

var params = {
    options: {
        success: function(data, response, params) {
            console.log('success', data);
        },
        error: function(error, response, params) {
            console.log('error', error);
        }
    },
    data: {
        limit: 10,
        market: "coincheck",
        pair: "btc_jpy",
        unit: 60 
    }
    
};
coinCheck.candleRates.all(params);


```

## License
MIT

