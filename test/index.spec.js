/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const extractLinksMdTest = require('../index');

describe('extract links from markdown', () => {
	describe('validate input', () => {
		it('input is empty', () => {
			expect(extractLinksMdTest('')).to.be.false;
		});
	});
});