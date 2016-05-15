var Student = require('../models/Student');
module.exports.create = function addStudent(req, res){
	console.log('I am Failing');
	var student = new Student(req.body);
	student.save();
	console.log(req.body);
}