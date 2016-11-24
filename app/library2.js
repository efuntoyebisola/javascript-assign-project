module.exports={
	findMinMax: function(seq){
		var minNum, maxNum;
		for(var i = 0; i < seq.length; i++){
			if (i == 0)  {
				minNum = maxNum = seq[i];
				continue;
			}
			if(seq[i] > maxNum){
				maxNum = seq[i] ;
			} 
			if (seq[i] < minNum){
				minNum = seq[i];
			}
		}

		if (minNum == maxNum) {
			return [minNum];
		}
		return [minNum, maxNum];
	}
}