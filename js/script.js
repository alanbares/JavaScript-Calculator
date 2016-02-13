/*global $ */

$(document).ready(function() {
	var input = [],
		expression = [];

	$('button').click(function(e) {
		var k = $(this).data('calcVal'),
			result;

		//Tests if input is a number
		if (/[0-9]/.test(k)) {
			input.push(k);
			console.log(input);

		//Check if input is = and then compute result
		} else if(k == '=') {
			expression.push(input);

			result = eval(expression.join(''));
			console.log(result);
		}
		// Joins input array into a strin and pushes it to expression array
		 else  {
			expression.push(input.join(''));
			input = [];
			expression.push(k);
			console.log(expression);
		}


	});


});
