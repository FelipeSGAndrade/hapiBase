'use strict'

const userController = require('./userController');
const loginViewModel = require('./loginViewModel');

const login = {
    path: '/v1/user/login',
    method: 'POST',
    options: {
        tags: ['api', 'user'],
        description: 'Generate user token through email and password',
        notes: 'Generate user token through email and password',
        handler: userController.login,
        validate: {
            payload: loginViewModel.request
        },
        response: {
            status: {
                200: loginViewModel.response,
            }
        }
    }
};

const routes = [
    login
];

module.exports = routes;
