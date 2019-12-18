'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('Test 2 - Simple Filtering Example', () => {
    const test1 = require('./index');

    it ('Results should match expected_output.json', () => {
        const expectedOutput = require('./expected_output');
        const results = test1();
        expect(results).to.deep.equal(expectedOutput);
    });

})