'use strict'

const UserRoutes = require('./resources/user/routes');

const getRoutes = () => {

    const routes = UserRoutes;

    return routes;
}

module.exports = {
    getRoutes: getRoutes
};
