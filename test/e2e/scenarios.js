'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('todos app', function() {

	beforeEach(function() {
		browser.get('app/index.html');
	});

	it('should add new task', function() {
		var taskList = element.all(by.repeater('task in tasks'));
		var input = element(by.model('task.text'));

		expect(taskList.count()).toBe(2);

		input.sendKeys('new task');
		input.sendKeys(protractor.Key.ENTER);

		expect(taskList.count()).toBe(3);

	});

});
