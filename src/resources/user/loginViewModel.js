'use strict'

const Joi = require('joi')

const request = Joi.object({
    email: Joi.string().required().description('Login email'),
    password: Joi.string().required().description('Login password')
}).label('Login Request Params').meta({
    className: 'LoginRequest'
})

const response = Joi.object({
    token: Joi.string().required().description('New token for the user'),
    refreshToken: Joi.string().required().description('Refresh token for the user')
}).label('Login Response').meta({
    className: 'LoginResponse'
})

module.exports = {
    request: request,
    response: response
}
