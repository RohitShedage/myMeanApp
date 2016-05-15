var Student = require('../models/Student');
module.exports.create = function addStudent(req, res){
	var student = new Student(req.body);
	student.save(function(err, result){
		return res.json(result);
	});
}

module.exports.list = function getStudents(req, res){
	Student.find({}, function(err, results){
		return res.json(results);
	});
}