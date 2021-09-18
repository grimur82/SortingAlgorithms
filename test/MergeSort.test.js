const assert = require('assert');
const merger = require('../MergeSort');

describe('Simple Merge Tests', () => {

    it('merge( array ) test', () => {
        const test = merger([4, 2, 1, 5]);
        assert.deepStrictEqual(test, [1, 2, 4, 5]);
    });

    it('merge( array ) empty array test', () => {
        const test = merger([]);
        assert.deepStrictEqual(test, []);
    });

    it('merge( array ) sorted array test', () => {
        const test = merger([1, 2, 3, 4, 5, 6]);
        assert.deepStrictEqual(test, [1, 2, 3, 4, 5, 6]);
    });

    it('merge( array ) large array test', () => {
        const test = merger([1, 2, 3, 4, 5, 6, 1000000, 200000, 1321321, 120, 12321, 2131, 1]);
        const expectedList = [1, 1, 2, 3, 4, 5, 6, 120, 2131, 12321, 200000, 1000000, 1321321];
        assert.deepStrictEqual(test, expectedList);
    });
});
