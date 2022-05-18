const MySet = require('../dst4.js');
const expect = require('chai').expect;

describe('Testing class MySet', () => {
  // testioliot
  const myset = new MySet([1, 2, 3]);
  const otherset = new MySet([2, 3, 4, 5]);

  // JS -Class is a function
  it('Should export a class', () => {
    expect(MySet).to.be.a('Function');
    expect(myset).to.be.an('Object');
  });

  it('Class should contain certain methods', () => {
    expect(myset.add).to.be.a('Function');
    expect(myset.delete).to.be.a('Function');
    expect(myset.has).to.be.a('Function');
    expect(myset.union).to.be.a('Function');
  });

  it('add(data) -method', () => {
    expect(myset.add(4)).to.be.true;
    expect(myset.add(3)).to.be.false;
    expect(myset.size).equal(4);
  });

  it('delete(data) -method', () => {
    expect(myset.delete(2)).to.be.true;
    expect(myset.size).equal(3);
  });

  it('has(data) -method', () => {
    expect(myset.has(2)).to.be.false;
    expect(myset.has(4)).to.be.true;
  });

  it('union(setA, setB) -method', () => {
    const u = myset.union(myset, otherset);
    expect(u.size).equal(5);
    for (let i = 1; i < 6; i++) {
      expect(u.has(i)).to.be.true;
    }
  });
});
