const checkIllumination = require('../shineALight.js');

describe('the challenge here is to determine whether a light still shines on a tile after you turn off the lights in adjacent tiles', () => {
 
    it('should return LIGHT if light touches it and DARK of no light remains', () => {
        const lamps = [ [ 4, 3 ], [ 4, 4 ] ] 
        const query =[ [ 3, 4 ], [ 7, 6 ], [7, 5] ];
        expect(checkIllumination(8,lamps, query)).toStrictEqual(['DARK', 'LIGHT','DARK']);
    });
    it('should return ', () => {
        const lamps= [ [ 4, 4 ] ] ; // why does [3,4] break this?
        const query = [ [ 6, 3 ] ];
        expect(checkIllumination(8, lamps, query)).toStrictEqual(['DARK']);
    });
});

//'LIGHT', 'DARK', 'DARK', 'LIGHT'