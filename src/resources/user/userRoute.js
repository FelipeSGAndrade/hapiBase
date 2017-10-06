'use strict'

const userController = require('./userController');
const loginViewModel = require('./loginViewModel');

const login = {
    path: '/v1/user/login',
    method: 'POST',
    config: {
        tags: ['api'],
        description: 'Generate user token through email and password',
        notes: 'Generate user token through email and password',
        handler: (request, reply) => userController.login(request, reply),
        validate: {
            payload: loginViewModel.request
        },
        response: {
            schema: loginViewModel.response
        }
    }
};

const routes = [
    login
];

module.exports = routes;
