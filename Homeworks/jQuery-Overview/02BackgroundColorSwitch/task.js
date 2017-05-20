$(document).ready(function () {
	$('#paint').on('click', changeBackground);

	function changeBackground() {
		var name = $('#class').val();
		var color = $('#color').val();
		$('.' + name).css('background-color', color);
	}
});