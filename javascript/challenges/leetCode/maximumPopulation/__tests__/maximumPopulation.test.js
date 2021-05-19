const maximumPopulation = require('../maximumPopulationRefactored.js');
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
        expect(maximumPopulation([[1,1],[1,1]])).not.toBeNull();
    });
    it('should handle first case', () => {
        expect(maximumPopulation([[1993,1999],[2000,2010]])).toStrictEqual(1993);
    });
    it('should handle second case', () => {
        expect(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]])).toStrictEqual(1960);
    });
});

describe('Should test edge cases', () => {
    it('should handle arrays with dates in descending order', () => {
        expect(maximumPopulation([[1970,1981],[1960,1971],[1950,1961]])).toStrictEqual(1960);        
    });
    it('should handle population of one', () => {
        expect(maximumPopulation([[1999,2001]])).toStrictEqual(1999);
    });
});