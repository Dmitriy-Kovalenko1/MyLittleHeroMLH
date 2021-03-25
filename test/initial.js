import sel from '../data/selectors';

describe('My Little Hero', function () {

  describe('Getting to the page', function () {


    before('Open App', function () {
      browser.url('');
    });

    it('TC-001 Page Title is MLH trial ', function () {
      let title = browser.getTitle();
      browser.pause(2000);
      expect(title).toEqual('MLH trial');
    });

    describe('Elements exist', function () {

    });

    it('TC-002 Header is present', function () {
      let header = $(sel.header).isDisplayed();
      expect(header).toEqual(true);
    });

    it('TC-003 Instruction is present', function () {
      let instruction = $(sel.instruction).isDisplayed();
      expect(instruction).toEqual(true);
    });

    it('TC-004 Name field label is present', function () {
      let label = $$(sel.requiredLabel)[0].isDisplayed();
      expect(label).toEqual(true);
    });

    it('TC-005 Name field is present', function () {
      let name_field = $$('.ant-input')[0].isDisplayed();
      expect(name_field).toEqual(true);
    });

  });

});
