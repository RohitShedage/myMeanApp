app.controller('studentController', ['$scope', '$resource', function($scope, $resource){

	var Student = $resource('/api/student');
	$scope.students = [{
		"name": "Rohit"
	},
	{
		"name": "Rohan"
	},
	{
		"name": "Pranit"
	}];

	$scope.addStudent = function() {
		var student = new Student();
		student.name =  $scope.input;
		student.$save();
		console.log('123');
	};
}])