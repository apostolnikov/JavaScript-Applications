var app = app || {};

(function () {
	app.models.loadModels('https://api.parse.com/1/classes');

	app.models.students.getAllStudents(
			function (data) {
				console.log(data);
			},
			function (err) {
				console.log(err.responseText);
			}
		)
}());