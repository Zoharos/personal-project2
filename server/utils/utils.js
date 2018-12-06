const R = require('ramda');

const match = (route,routesArray) => R.contains(route,routesArray);

module.exports = {
    match
}