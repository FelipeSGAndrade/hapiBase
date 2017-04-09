'use strict'

const Joi = require('joi');

const request = Joi.object({
    email: Joi.string().required().description('Login email'),
    password: Joi.string().required().description('Login, password')
}).label('Generate Token Request Params').meta({
    className: 'GenerateToken'
});

const response = Joi.object({
    token: Joi.string().required().description('New token for the user'),
    refreshToken: Joi.string().required().description('Refresh token for the user')
}).label('Generate Token Response').meta({
    className: 'GenerateToken'
});

module.exports = {
    request: request,
    response: response
}
