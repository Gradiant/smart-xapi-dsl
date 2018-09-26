import { categoryIdentifiers } from '@gradiant/xapi-dsl/dsl';
import { expect } from 'chai';
import { recipes } from '../../src/recipes';

describe('Recipes', () => {
  it('should include open answer', () => {
    expect(recipes.openAnswer).to.be.equal(categoryIdentifiers.smart.recipeOpenAnswer);
  });

  it('should include closed response', () => {
    expect(recipes.closedResponse).to.be.equal(categoryIdentifiers.smart.recipeClosedResponse);
  });

  it('should include audio/video', () => {
    expect(recipes.audioVideo).to.be.equal(categoryIdentifiers.smart.recipeAudioVideo);
  });

  it('should include discussion', () => {
    expect(recipes.discussion).to.be.equal(categoryIdentifiers.smart.recipeDiscussion);
  });

  it('should include non-interactive', () => {
    expect(recipes.nonInteractive).to.be.equal(categoryIdentifiers.smart.recipeNoInteractive);
  });
});
