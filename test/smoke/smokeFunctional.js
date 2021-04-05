import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';

describe('Required fields and story created', function () {

  before('Open App', function () {
    browser.url('');
  });

  it('TC-026 Submit button is enabled after fields 1-4 filled in with valid values', function () {
    $(sel.name).setValue(name.default);
    $$(sel.radioButtons)[gender.she].click();
    $(sel.age).setValue(age.default);
    $(sel.storyType).click();
    $$(sel.storyList)[story.comedy].click();
    let submitBtn = $(sel.submit).isEnabled();
    expect(submitBtn).toEqual(true);
  });

  it('TC-027 User is redirected to the story page', function () {
    browser.refresh();
    $(sel.name).setValue('LadyBug007');
    $$(sel.radioButtons)[1].click();
    $(sel.age).setValue('1234567890');
    $(sel.storyType).click();
    $$(sel.storyList)[6].click();
    $(sel.submit).click();

    browser.pause(1000);
    let tryAgainBtn = $(sel.tryAgain).isDisplayed();
    expect(tryAgainBtn).toEqual(true);
  });

});