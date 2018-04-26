'use strict'
const db = require('../../managers/dataBaseManager')

const login = (request, h) => {
    const email = request.payload.email
    const password = request.payload.password

    const filter = {email, password}
    return db.findSingle({doc: 'user', filter})
        .then((user) => {
            if(!user) return h.response().code(404)

            return {
                token: "test",
                refreshToken: "refreshTest"
            }
        })
}

module.exports = {
    login
}
