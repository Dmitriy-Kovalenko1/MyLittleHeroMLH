describe('My Little Hero', function () { //define suite title by passing a string

  describe('Getting to the page', function () { //define sub-suite title by passing a string

    before('Open App', function () {
      browser.url(''); //open baseUrl
    });

    it('TC-001 Page Title is MLH trial ', function () { //define test title by passing a string
      let title = browser.getTitle(); //get page title and assign it to the "title" variable
      browser.pause(2000); //just pause to visually see that something is happening on the page
      expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
    });

  });

  describe('Elements exist', function () { //define sub-suite title by passing a string

    it('TC-002 Header is present', function () {
      let header = $('h3').isDisplayed();
      expect(header).toEqual(true);
    });

    it('TC-003 Instruction is present', function () {
      let instruction = $('p').isDisplayed();
      expect(instruction).toEqual(true);
    });

    it('TC-004 Name field label is present', function () {
      let label = $$('.ant-form-item-required')[0].isDisplayed();
      expect(label).toEqual(true);
    });

    it('TC-005 Name field is present', function () {
      let name_field = $$('.ant-input')[0].isDisplayed();
      expect(name_field).toEqual(true);
    });

  });

});
