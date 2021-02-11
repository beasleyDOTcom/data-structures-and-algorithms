//const checkIllumination = require('../shineALight.js');
const checkIllumination = require('../take2.js');
const {lamps, query, result} = require('../insertComman.js');

describe('the challenge here is to determine whether a light still shines on a tile after you turn off the lights in adjacent tiles', () => {
 
    it.only('should return LIGHT if light touches it and DARK of no light remains', () => {
        const lamps = [ [ 4, 3 ], [ 4, 4 ] ] 
        const query =[ [ 3, 4 ], [ 7, 6 ] ];
        expect(checkIllumination(8,lamps, query)).toStrictEqual(['DARK', 'LIGHT',]);
    });
    it('should return ', () => {
        const lamps= [ [ 1, 6 ], [ 5, 6 ], [ 7, 3 ], [ 3, 2 ] ] ;
        const query = [ [ 4, 4 ], [ 6, 6 ], [ 8, 1 ], [ 3, 2 ], [ 2, 3 ] ];
        expect(checkIllumination(8, lamps, query)).toStrictEqual(['DARK', 'LIGHT', 'DARK', 'DARK', 'LIGHT']);
    });
    it('should ', () => {
        const lamps = [[500, 500],[600,600],[1000,100]];
        const query = [[500,500],[45,100],[501,502],[602,602]];
        expect(checkIllumination(1000,lamps, query)).toStrictEqual(['LIGHT', 'LIGHT', 'DARK', 'LIGHT']);
    });
    it('should ', () => {
        const lamps = [[500, 500]];
        const query = [[500,500],[45,100],[501,501],[502,502]];
        expect(checkIllumination(1000,lamps, query)).toStrictEqual(['DARK', 'DARK', 'DARK', 'LIGHT']);
    });
    it('should remove light from lamp next to it', () => {
        const lamps = [[1,500],[500,500], [500,500], [500,500]];
        const query = [[2,500], [2,499]];
        expect(checkIllumination(1000, lamps, query)).toStrictEqual(['LIGHT', 'DARK'])
    });
    it('should allow a big area', () => {
        expect(checkIllumination(100000, [[1,1],[100000,100000]], [[1,1]])).toStrictEqual(['LIGHT'])
    });

    it('should pass test no. 2', () => {
        expect(checkIllumination(1000, lamps, query)).toHaveLength(query.length)
//console.log(JSON.stringify(checkIllumination(1000, lamps, query)))
      expect(checkIllumination(1000, lamps, query)).toStrictEqual(result);
    });
});