'use strict';

const Good = require('good');

const options = {
    ops: {
        interval: 1000
    },
    reporters: {
        console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*' }]
        }, { module: 'good-console' }, 'stdout']
    }
};

module.exports = {
    register: Good,
    options: options
};
