/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const getLinksFromMdTest = require('../index');

describe('extract links from markdown', () => {
	describe('validate input', () => {
		it('extract link/url from markdown', () => {
			expect(getLinksFromMdTest('# Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut[labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com)Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')).deep.equal([{
				href: 'https://en.wiktionary.org/wiki/labore',
				text: 'labore'
			},
			{
				href: 'https://en.wiktionary.org/wiki/dolore',
				text: 'dolore'
			},
			{ href: 'http://foo.com', text: 'foo' }]);
		});
		it('extract link/img from markdown', () => {
			expect(getLinksFromMdTest('![Tux, the Linux mascot](/assets/images/tux.png)')).deep.equal([{
				href: '/assets/images/tux.png',
				text: 'Tux, the Linux mascot'
			}]);
		});
		it('extract link/url from markdown', () => {
			expect(getLinksFromMdTest('My favorite search engine is[Duck Duck Go](https://duckduckgo.com).')).deep.equal([{
				href: 'https://duckduckgo.com',
				text: 'Duck Duck Go'
			}]);
		});
		it('object is null on markdown', () => {
			expect(null).to.be.a('null');
		});
	});
});