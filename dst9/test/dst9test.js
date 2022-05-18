const funcs = require('../dst9.js');
const expect = require('chai').expect;

describe('Testing dst9 -functions', () => {
  const testroot = 5;
  const testarr = [1, 3, 4, 6, 7, 22];

  it('Should export functions', () => {
    expect(funcs.createTree).to.be.a('Function');
  });

  it('Function createTree', () => {
    const testTree = funcs.createTree(testroot, testarr);
    expect(testTree.size()).to.equal(7);
  });
});
