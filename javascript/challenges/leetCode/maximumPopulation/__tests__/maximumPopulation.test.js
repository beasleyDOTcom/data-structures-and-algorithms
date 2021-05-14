const maximumPopulation = require('../maximumPopulation.js');
/*
Input: logs = [[1993,1999],[2000,2010]]
Output: 1993
Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
Example 2:

Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
Output: 1960
Explanation: 
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.
*/
describe('Basic test of maximumPopulation', () => {
    it('should import maximumPopulation', () => {
        expect(maximumPopulation()).not.toBeNull();
    });
    it('should handle first case', () => {
        expect(maximumPopulation([[1993,1999],[2000,2010]])).toStrictEqual(1993)
    });
    it('should handle second case', () => {
        expect(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]])).toStrictEqual(1960)
    });
});

