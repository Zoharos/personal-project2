const R = require('ramda');

const match = (route,routesArray) => R.contains(route,routesArray);

const isValidURL = (route, routesArray) => R.contains(route,routesArray) ? route : "/login";

module.exports = {
    match,
    isValidURL
}