const { expect } = require('code')
const { describe, beforeEach, afterEach, it } = exports.lab = require('lab').script()
const sinon = require('sinon')

const userController = require('../userController')
const db = require('../../../managers/dataBaseManager')

const sandbox = sinon.createSandbox()

beforeEach(() => {
    sandbox.stub(db)
})

afterEach(() => {
    sandbox.restore()
})

describe('when logging in', () => {
    it('should return a new token when user is found', async () => {
        const payload = {
            email: 'teste1',
            password: 'teste2'
        }

        const request = { payload }

        db.findSingle.returns(Promise.resolve({}))

        const expectedToken = {
            token: 'test',
            refreshToken: 'refreshTest'
        }
        const response = await userController.login(request)

        expect(response).to.equal(expectedToken)
    })

    it('should return error 404 when user is not found', async () => {
        const payload = {
            email: 'teste1',
            password: 'teste2'
        }

        const request = { payload }

        db.findSingle.returns(Promise.resolve(null))

        const codeStub = sinon.stub()
        const reply = {
            response: sinon.stub().returns({
                code: codeStub
            })
        }

        const response = await userController.login(request, reply)

        expect(response).to.be.undefined()
        expect(codeStub.calledWith(404)).to.be.true()
    })
})
