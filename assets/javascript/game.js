$(document).ready(function() {

	var computerChoice = Math.floor(Math.random()*102+19)
	console.log(computerChoice);

	$('#section').html(computerChoice);

	var crystalNum1 = Math.floor(Math.random()*12+1)
		console.log(crystalNum1);
	var crystalNum2 = Math.floor(Math.random()*12+1)
		console.log(crystalNum2);
	var crystalNum3 = Math.floor(Math.random()*12+1)
		console.log(crystalNum3);
	var crystalNum4 = Math.floor(Math.random()*12+1)
		console.log(crystalNum4);

		var wins = 0;
		var losses = 0;
		var userTotal= 0;

		$('#wins').html(wins);
		$('#losses').html(losses);

		function reset(){
			var computerChoice = Math.floor(Math.random()*102+19)
				console.log(computerChoice);
				$('#section').html(computerChoice);

			var crystalNum1 = Math.floor(Math.random()*12+1)
				console.log(crystalNum1);
			var crystalNum2 = Math.floor(Math.random()*12+1)
				console.log(crystalNum2);
			var crystalNum3 = Math.floor(Math.random()*12+1)
				console.log(crystalNum3);
			var crystalNum4 = Math.floor(Math.random()*12+1)
				console.log(crystalNum4);	

				var userTotal = 0;
				$('#myNum').html(userTotal);
		}

		function yay(){
 		 	wins++; 
  			$('#wins').html(wins);
  			reset();

  		function lose(){
  			losses++;
  			$('#losses').html(losses);
  			reset();	
  		}
  	}
		
});


	
   




	




