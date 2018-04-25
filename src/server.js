'use strict'

const _ = require('lodash')
const Plugins = require('./config/plugins')
const Config = require('./config/config')
const Hapi = require('hapi')
const Routes = require('./routes')

const server = Hapi.server({
    host: Config.server.host,
    port: Config.server.port
})

const registerPlugins = async () => {
    await server.register(Plugins)
        .catch((err) => {
    
            if (err) {
                console.log(err)
            }
        })
}

const start = async () => {
    
    // await server.register(require('./config/plugins/good'))
    //     .catch((err) => {
    //         console.log(err)
    //     })

    await registerPlugins()

    Routes.getRoutes().map((route) => server.route(route))
    
    await server.start()
        
    server.log('info', 'server running at: ' + server.info.uri + ' using environment: ' + Config.getEnvironment())
}

const stop = (reason) => {

    server.log('info', 'server stopping: ' + reason)
    server.stop()
}


module.exports = {
    start: start,
    stop: stop,
    server: server
}
