/*global $ */



$(document).ready(function() {
	var calcValues = [],
		displayBox = $('.display-text')

	$('button').click(function(e) {
		calcValues.push($(this).data('calcVal'));
		console.log(calcValues);
		displayBox.text(calcValues);
	});
});
