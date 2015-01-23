/* Controllers */

(function () {
	"use strict";

	angular.module('todos-controllers', []).controller('TodosController', ['$scope', function ($scope) {
		$scope.task = {};
		$scope.tasks = [{
				text: 'Use git for my-todo-angular example',
				completed: true
			},{
				text: 'Learn AngularJS',
				completed: false
			}
		];

		$scope.addTask = function () {
			$scope.task.completed = false;
			$scope.tasks.push($scope.task);
			$scope.task = {};
		};

	}]);

})();
