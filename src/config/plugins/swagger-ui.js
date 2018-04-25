'use strict'

module.exports = {
    plugin: require('hapi-swaggered-ui'),
    options: {
        title: 'HapiBase Documentation',
        path: '/docs',
        swaggerOptions: {
            validatorUrl: null
        }
    }
}
