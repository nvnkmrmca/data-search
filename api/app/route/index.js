'use strict';

module.exports = (app) => {
    require('./heartbeat')(app),
    require('./search')(app)
};