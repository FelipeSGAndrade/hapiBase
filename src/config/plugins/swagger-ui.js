'use strict';

module.exports = {
    register: require('hapi-swaggered-ui'),
    options: {
        title: 'Wishlist Documentation',
        path: '/docs',
        swaggerOptions: {
            validatorUrl: null
        }
    }
};
