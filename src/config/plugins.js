'use strict';

const Good = require('./plugins/good');
const Swagger = require('./plugins/swagger');
const SwaggerUi = require('./plugins/swagger-ui');

const UsedList = function () {

    if (process.env.app_environment && (process.env.app_environment === 'development') {
        return [
            Good,
            require('inert'),
            require('vision'),
            require('hapi-auth-jwt'),
            Swagger,
            SwaggerUi
        ];
    }

    //Remove swagger from production
    if (process.env.app_environment && process.env.app_environment === 'production') {
        return [
            Good,
            require('inert'),
            require('vision'),
            require('hapi-auth-jwt')
        ];
    }

    //Do not use for testing
    return [
        require('hapi-auth-jwt')
    ];

};

module.exports = UsedList();
