'use strict';

const _ctrl = require('../controller/search');
const route = '/search';

module.exports = (app) => {
    // Search Quote
    app.get(route + '/quote/:text', _ctrl.searchQuote);

    // Search 
    app.get(route + '/:text/:page/:size', _ctrl.search);
};