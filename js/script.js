/*global $ */

$(document).ready(function() {
	var calcValues = [],
		displayBox = $('.display-text'),
		numKeys = [0,1,2,3,4,5,6,7,8,9],
		operationKeys = ['+', '-', '/', '*', '%'],
		controlKeys = ['AC', 'CE'];

	$('button').click(function(e) {
		var k = $(this).data('calcVal');
		console.log(calcValues);

		// On click switch case for buttons not displayed
		if ($.inArray(k, controlKeys) >=0) {
			calcValues = [];
		} else if ($.inArray(k, numKeys)) {
			calcValues.push(k);
		}
		updateDisplay();
	});

	function updateDisplay() {
		displayBox.text(calcValues.join(''));
	}

});
