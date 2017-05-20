$(document).ready(function () {
	$('#addBefore').on('click', function () {
		$('ul').prepend($('<li>').text($('input').val()));
	});
	$('#addAfter').on('click', function () {
		$('ul').append($('<li>').text($('input').val()));
	})
});
