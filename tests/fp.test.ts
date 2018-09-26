import { expect } from 'chai';
import faker from 'faker';
import { anyPass, equals, propEq } from '../src/fp';

describe('equals()', () => {
  it('should return a function', () => {
    expect(equals(faker.random.number())).to.be.a('function');
  });

  it('should return true when the value is equal', () => {
    const value = faker.random.uuid();
    const isEqual = equals(value);

    expect(isEqual(value)).to.be.true;
  });

  it('should return false when the value is not equal', () => {
    const isEqual = equals(faker.random.uuid());

    expect(isEqual(faker.random.uuid())).to.be.false;
  });
});

describe('anyPass()', () => {
  it('should return a function', () => {
    expect(anyPass([() => true])).to.be.a('function');
  });

  it('should return true when a function matches', () => {
    const value = faker.random.uuid();
    const isEqual = equals(value);
    const isValid = anyPass([isEqual, () => false]);

    expect(isValid(value)).to.be.true;
  });

  it('should return false when no function matches', () => {
    const isEqual = equals(faker.random.uuid());
    const isValid = anyPass([isEqual, () => false]);

    expect(isValid(faker.random.uuid())).to.be.false;
  });
});

describe('propEq()', () => {
  it('should return a function', () => {
    expect(propEq('id', faker.random.uuid())).to.be.a('function');
  });

  it('should not fail for null', () => {
    const isEqual = propEq('id', faker.random.uuid());

    expect(isEqual(null as any)).to.be.false;
  });

  it('should not fail for undefined', () => {
    const isEqual = propEq('id', faker.random.uuid());

    expect(isEqual(undefined as any)).to.be.false;
  });

  it('should return true when the property is equal', () => {
    const value = faker.random.uuid();
    const isEqual = propEq('id', value);

    expect(isEqual({ id: value })).to.be.true;
  });

  it('should return false when the property is not equal matches', () => {
    const isEqual = propEq('id', faker.random.uuid());

    expect(isEqual({ id: faker.random.uuid() })).to.be.false;
  });
});
