app.controller('studentController', ['$scope', '$resource', function($scope, $resource){

	var Student = $resource('/api/student');
	
	function fetchStudents() {
		Student.query(function(results){
			$scope.students = results;
		});
	}

	fetchStudents();

	$scope.addStudent = function() {
		var student = new Student();
		student.name =  $scope.input;
		student.$save(function(){
			$scope.input = '';
			fetchStudents();
		});
	};
}])