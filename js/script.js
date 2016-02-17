/*global $ */

$(document).ready(function() {
	var input = [],
		expression = [],
        displayBox = $('.display-text'),
 		numKeys = [0,1,2,3,4,5,6,7,8,9],
 		operationKeys = ['+', '-', '/', '*', '%', '='],
 		controlKeys = ['AC', 'CE'];

	$('button').click(function(e) {
		var k = $(this).data('calcVal'),
			result;

		//Tests if input is a number
		if (/[0-9]/.test(k)) {
			input.push(k);
			console.log(input);

		//Check if input is = and then compute result
		}
        else if(k == 'operationKeys') {
			expression.push(input);

			result = eval(expression.join(''));
			console.log(result);
		}
		// Joins input array into a string and pushes it to expression array
		 else  {
			expression.push(input.join(''));
			expression.push(k);
            input = [];

			console.log(expression);
		}




	});


});
