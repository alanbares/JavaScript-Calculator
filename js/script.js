/*global $ */

$(document).ready(function() {
	var input = [],
		expression = [];

	$('button').click(function(e) {
		var k = $(this).data('calcVal'),
			result;

		if (/[0-9]/.test(k)) {
			input.push(k);
			console.log(input);
		} else if(k == '=') {
			expression.push(input);

			result = eval(expression.join(''));
			console.log(result);
		}
		 else  {
			expression.push(input.join(''));
			input = [];
			expression.push(k);
			console.log(expression);
		}


	});


});
