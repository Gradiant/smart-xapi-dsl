import { activityTypes } from '@gradiant/xapi-dsl/dsl';
import { expect } from 'chai';
import { categories } from '../../src/categories';

describe('Categories', () => {
  it('should include recipe', () => {
    expect(categories.recipe).to.be.equal(activityTypes.smart.recipe);
  });
});
