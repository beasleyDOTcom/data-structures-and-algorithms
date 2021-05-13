const justATest = require('../justATest.js');

describe('Basic test of justATest', () => {
    it('should import justATest', () => {
        expect(justATest()).not.toBeNull();
    });
});

