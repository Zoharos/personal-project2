const utils = require('./utils');

describe('utls test', () => {
    test('matches func', () => {
        const params = ['route1','route2','route3'];
        expect(utils.match('route1',params)).toEqual(true);
    });
});