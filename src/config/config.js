'use strict';

let environment = process.env.NODE_ENV || 'development';

const server = {
    host: process.env.app_host || '0.0.0.0',
    port: process.env.app_port || '8000'
};

const database = {
    host: process.env.app_db_host || '127.0.0.1',
    port: process.env.app_db_port || '27017',
    db: process.env.app_db_name || 'develop'
};

const security = {
    key: process.env.app_security_key || 'myKey',
    tokenMaxAge: process.env.app_security_token_max_age || '1y',
    issuer: process.env.app_security_issuer || 'c4fmcommerce',
    algorithm: process.env.app_security_algorithm || 'HS384',
    cipher_algorithm: process.env.app_security_cipher_algorithm || 'aes256',
    cipher_key: process.env.app_security_cipher_key || 'ce694086164d19ddf6b856dbd28a97886178cbb3cd3dcfd52da263846b3f341e465230ae6371554f28384c94c5ededdfdff18b0d1e8209312ff536fd01ddeb9'
};

const setEnvironment = (newEnvironment) => {

    environment = newEnvironment;
};

const getEnvironment = () => {

    return environment;
};

const isEnvironment = (checkEnvironment) => {

    return checkEnvironment === environment;
};

module.exports = {
    setEnvironment: setEnvironment,
    server: server,
    database: database,
    security: security,
    isEnvironment: isEnvironment,
    getEnvironment: getEnvironment
};
