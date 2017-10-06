'use strict'

const UserRoutes = require('./resources/user/userRoute');

const getRoutes = () => {

    const routes = UserRoutes;

    return routes;
}

module.exports = {
    getRoutes: getRoutes
};
