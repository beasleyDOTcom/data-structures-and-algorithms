const checkIllumination = require('../shineALight.js');

describe('the challenge here is to determine whether a light still shines on a tile after you turn off the lights in adjacent tiles', () => {
    const lamps = [ [ 4, 3 ], [ 4, 4 ] ] 
    const query =[ [ 3, 4 ], [ 7, 6 ] ];
    it('should return LIGHT if light touches it and DARK of no light remains', () => {
        expect(checkIllumination(8,lamps, query)).toStrictEqual(['DARK', 'LIGHT']);
    });
    it('should return ', () => {
        lamps= [ [ 1, 6 ], [ 5, 6 ], [ 7, 3 ], [ 3, 2 ] ] ;
        query = [ [ 4, 4 ], [ 6, 6 ], [ 8, 1 ], [ 3, 2 ], [ 2, 3 ] ];
        expect(checkIllumination(8, lamps, query)).toStrictEqual(['DARK', 'LIGHT', 'DARK', 'DARK', 'LIGHT']);
    });
});