'use strict'

const login = (request, h) => {
    return {
        token: "test",
        refreshToken: "refreshTest"
    }
}

module.exports = {
    login
}