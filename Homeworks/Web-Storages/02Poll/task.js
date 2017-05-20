$(document).ready(function () {
	if (localStorage.question1) {
		var currentAnswer = '#' + localStorage.question1;
		$(currentAnswer).attr('checked', 'checked');
	}

	if (localStorage.question2) {
		var currentAnswer2 = '#' + localStorage.question2;
		$(currentAnswer2).attr('checked', 'checked');
	}

	if (localStorage.question3) {
		var currentAnswer3 = '#' + localStorage.question3;
		$(currentAnswer3).attr('checked', 'checked');
	}

	$('input[name="question1"]')
			.on('click', function(){
				localStorage.setItem('question1', $(this).attr('id'));
			});

	$('input[name="question2"]')
		.on('click', function(){
			localStorage.setItem('question2', $(this).attr('id'));
		});

	$('input[name="question3"]')
		.on('click', function(){
			localStorage.setItem('question3', $(this).attr('id'));
		});

	$('#submitButton')
		.on('click', function() {
			$('#mainSection').hide();
			showResults();
		});

	function showResults(){
		var answer1 = $('input[name="question1"]:checked').val();
		var answer2 = $('input[name="question2"]:checked').val();
		var answer3 = $('input[name="question3"]:checked').val();

		$('.questions-form').hide(500);
		$('.result').find('#result-answer1').text(answer1);
		$('.result').find('#result-answer2').text(answer2);
		$('.result').find('#result-answer3').text(answer3);
		$('.result').show(500);
	}

	
});