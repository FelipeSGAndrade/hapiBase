const uuid = require('uuid/v1')
const _ = require('lodash')
const JsonDB = require('node-json-db')
const db = new JsonDB('./database/myDataBase', true)

const insert = ({doc, data}) => {
    const id = data.id || uuid()
    db.push(`/${doc}/${id}`, data)
}

const findById = ({doc, id}) => {
    return Promise.resolve(db.getData(`/${doc}/${id}`))
}

const find = ({doc, filter}) => {
    const findPromise = Promise.resolve(db.getData(`/${doc}`))
        .catch((err) => {
            if(err.id === 5) return []
            else throw err
        })

    return findPromise
        .then((docs) => _.filter(docs, filter))
}

const findSingle = ({doc, filter}) => {
    return find({doc, filter})
        .then((docs) => docs[0])
}

if(!findSingle({doc: 'user'})) {
    insert({ doc: 'user', data: {
        email: 'teste1',
        password: 'teste2'
    }})
}

module.exports = {
    insert,
    findById,
    find,
    findSingle,
}