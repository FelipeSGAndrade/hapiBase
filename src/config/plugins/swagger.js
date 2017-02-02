'use strict';

module.exports = {
    register: require('hapi-swaggered'),
    options: {
        tags: {
            'api': 'API Endpoints'
        },
        info: {
            title: 'Wishlist Documentation',
            version: '1.0'
        }
    }
};
