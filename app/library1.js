module.exports = {
	aritGeo: function (seq) {
		if (seq.length == 0) {
			return 0;
		}
		var arithDiff;
		var isArith = true;
		for(var i=0;i < seq.length - 1;i++){
			var diff = seq[i+1] - seq[i];
			
			if (i == 0) {
				arithDiff = diff;
				continue;
			}

			if (arithDiff != diff) {
				isArith = false;
				break;
			}
		}
		if (isArith) {
			return "Arithmetic";
		}

		var geoDiff;
		var isGeo= true;
		for(var i=0;i < seq.length - 1;i++){
			var quo = seq[i+1] / seq[i];
			
			if (i == 0) {
				geoDiff = quo;
				continue;
			}

			if (geoDiff != quo) {
				isGeo = false;
				break;
			}
		}
		if (isGeo) {
			return "Geometric";
		}

		return -1;
	}
};

