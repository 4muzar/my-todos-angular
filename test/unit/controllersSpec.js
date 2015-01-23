'use strict';

/* jasmine specs for controllers go here */

describe('TodosController', function() {
	var scope, ctrl;

	beforeEach(module('todoapp'));

	beforeEach(inject(function($controller) {
      	scope = {};
      	ctrl = $controller('TodosController', {$scope:scope});
    }));

	it('should create "tasks" model with 2 tasks', function() {
		expect(scope.tasks.length).toBe(2);
	});

	it('should add one more task in "tasks" model', function() {
		scope.task = { text: 'task body' };
		scope.addTask(); 
		expect(scope.tasks.length).toBe(3);
	});

});
