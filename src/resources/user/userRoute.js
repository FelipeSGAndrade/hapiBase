'use strict'

const generateToken = {
    path: '/v1/user',
    method: 'POST',
    config: {
        tags: ['api'],
        description: 'Generate user token through email and password',
        notes: 'Generate user token through email and password',
        handler: (request, reply) => UserController.guest(request, reply),
        validate: {
            payload: GenerateTokenViewModel.request
        },
        response: {
            schema: GenerateTokenViewModel.response
        }
    }
};

const routes = [
    generateToken
];

module.exports = routes;
