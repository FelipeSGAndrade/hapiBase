'use strict'

module.exports = {
    plugin: require('hapi-swaggered'),
    options: {
        tagging: {
            mode: "tags"
        },
        tags: [{
            name: 'user',
            description: 'User endpoints'
        }],
        info: {
            title: 'HapiBase Documentation',
            version: '1.0'
        }
    }
}
