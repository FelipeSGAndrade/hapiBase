'use strict';

const Plugins = require('./config/plugins');
const Config = require('./config/config');
const Hapi = require('hapi');
const UserService = require('./libs/log/logService');
const SecurityManager = require('./managers/securityManager');
const Routes = require('./routes');

const server = new Hapi.Server();

server.connection({
    host: Config.server.host,
    port: Config.server.port,
    labels: ['api']
});

server.register(Plugins, (err) => {

    if (err) {
        console.log(err);
    }
});

server.auth.strategy('token', 'jwt', {
    key: Config.security.key,
    validateFunc: (request, decodedData, callback) => {

        try {
            const decryptedData = SecurityManager.decrypt(decodedData.user);

            UserService.get(decryptedData.userId)
                .then((user) => {

                    callback(null, true, user);
                })
                .catch((error) => {

                    callback(error, false, null);
                });
        }
        catch (error) {
            callback(error, false, null);
        }
    },
    verifyOptions: {
        maxAge: Config.security.maxAge,
        algorithms: [
            Config.security.algorithm
        ]
    }
});

_.each(Routes.getRoutes(), (route) => {

    server.route(route);
});

server.ext('onPreResponse', (request, reply) => {

    const statusCode = request.response.statusCode || request.response.output.statusCode;

    if (statusCode < 400) {
        return reply.continue();
    }

    const message = request.response.message;
    const error = request.response.output.payload.error;

    return LogService.errorFromResponse(request, request.response)
        .then((log) => {

            const errorModel = {
                traceId: log._id,
                message: message,
                error: error,
                statusCode: log.statusCode
            };

            if (!Config.isEnvironment('production') && statusCode === 500) {
                errorModel.details = log.details;
            }

            if (statusCode === 400) {
                errorModel.validation = request.payload.validation
                    ? request.payload.validation
                    : {};
            }

            return reply(errorModel).code(errorModel.statusCode);
        })
        .catch((err) => {

            console.log(err);
            return reply.continue();
        });
});


const start = () => {

    server.start(() => {

        server.log('info', 'server running at: ' + server.info.uri + ' using environment: ' + Config.getEnvironment());
    });

};

const stop = (reason) => {

    server.log('info', 'server stopping: ' + reason);
    server.stop();
};


module.exports = {
    start: start,
    stop: stop,
    server: server
};
