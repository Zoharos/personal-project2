const utils = require('./utils');

describe('utls test', () => {
    test('matches func', () => {
        const params = ['route1','route2','route3'];
        expect(utils.match('route1',params)).toEqual(true);
    });
    test('is valid url', () => {
        const routesArray = ['/route1', '/route2', '/route3']
        const route = '/route4'
        expect(utils.isValidURL(route,routesArray)).toEqual("/login")
    });
});