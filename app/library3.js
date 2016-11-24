module.exports={
	fizzBuzz: function(num){
		var fizz = num % 3 == 0;
		var buzz = num % 5 == 0;

		if (fizz && buzz) {
			return "FizzBuzz";
		}

		if (fizz) {
			return "Fizz";
		}

		if (buzz) {
			return "Buzz";
		}
		
		return num;
	}
}