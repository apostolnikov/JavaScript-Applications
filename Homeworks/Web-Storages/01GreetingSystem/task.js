$(document).ready(function() {
	if (!localStorage.name) {
		$('#setNameToLocalStorage').on('click', function() {
			var userName = $('#nameInput').val();
			localStorage.setItem('name', userName);
			location.reload();
		});
	} else {
		var userName = localStorage.getItem('name');
		$('#greeting-form').children().remove();
		$('#greeting-form').append($('<h1>').text('Hello ' + userName + '!'));
	}

	function incrementLoads() {
		//Counter for Session storage
 		if (!sessionStorage.counterSession) {
    		sessionStorage.setItem('counterSession', 0);
  		}
		var sessionCount = parseInt(sessionStorage.getItem('counterSession'));
		sessionCount += 1;
		sessionStorage.setItem('counterSession', sessionCount);
		$('#sessionCountDiv').text('Session storage count: ' + sessionCount);

		//Counter for Local storage
		if (!localStorage.counterLocal) {
			localStorage.setItem('counterLocal', 0);
		};
		var localCount = parseInt(localStorage.getItem('counterLocal'));
		localCount += 1;
		localStorage.setItem('counterLocal', localCount);
		$('#localCountDiv').text('Local storage count: ' + localCount);
	}
	incrementLoads();
});