var express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser');
student = require('./app/server/Student');

mongoose.connect('mongodb://localhost:27017/test');
app.use(bodyParser());

app.get('/', function(req, res){
	res.sendfile(__dirname + '/app/views/index.html');
});

app.use('/controller', express.static(__dirname + '/app/controller'));

app.post('/api/student', student.create);

app.listen(3000, function() {
	console.log('Jai Mata Di');
});