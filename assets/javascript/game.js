$(document).ready(function() {
    // declaring random computer number generator variable and displays number in computer choice box
    var computerChoice = Math.floor(Math.random() * 102 + 19)
    	console.log(computerChoice);

    $('#section').html(computerChoice);
    //declaring crystal random number generator variables 
    var crystalNum1 = Math.floor(Math.random() * 12 + 1)
   		console.log(crystalNum1);
    var crystalNum2 = Math.floor(Math.random() * 12 + 1)
    	console.log(crystalNum2);
    var crystalNum3 = Math.floor(Math.random() * 12 + 1)
    	console.log(crystalNum3);
    var crystalNum4 = Math.floor(Math.random() * 12 + 1)
    	console.log(crystalNum4);
    // daclaring starting score variables
    var wins = 0;
    var losses = 0;
    var userTotal = 0;
    //js to html wins and losses score
    $('#wins').html(wins);
    $('#losses').html(losses);
    //resets random numbers on whole  page and dispalys  user total as 0
    function reset() {
        var computerChoice = Math.floor(Math.random() * 102 + 19)
        console.log(computerChoice);
        $('#section').html(computerChoice);

        var crystalNum1 = Math.floor(Math.random() * 12 + 1)
        	console.log(crystalNum1);
        var crystalNum2 = Math.floor(Math.random() * 12 + 1)
        	console.log(crystalNum2);
        var crystalNum3 = Math.floor(Math.random() * 12 + 1)
        	console.log(crystalNum3);
        var crystalNum4 = Math.floor(Math.random() * 12 + 1)
        	console.log(crystalNum4);

        userTotal = 0;
        $('#myNum').html(userTotal);
    }
    //function that adds a win and dispalys the win 
    function yay() {
        wins++;
        //console.log('wins',wins);
        $('#wins').html(wins);
        reset();
    }
    //function that adds a loss and displays the loss
    function lose() {
        losses++;
        //console.log('losses', losses);
        $('#losses').html(losses);
        reset();
    }


    $("#crystal1").on("click", function() {
        userTotal = userTotal + crystalNum1;
        $('#myNum').html(userTotal);

        console.log("cow", $(crystalNum1))

        if (userTotal === computerChoice) {
            yay();
            console.log("winner")

        } else if (userTotal > computerChoice) {
            lose();
            console.log("looser")
        }

    })

    $("#crystal2").on("click", function() {
        userTotal = userTotal + crystalNum2;
        $('#myNum').html(userTotal);

        console.log("pig", $(crystalNum2))

        if (userTotal === computerChoice) {
            yay();
            console.log("winner")

        } else if (userTotal > computerChoice) {
            lose();
            console.log("looser")
        }
    })

    $("#crystal3").on("click", function() {
        userTotal = userTotal + crystalNum3;
        $('#myNum').html(userTotal);

        console.log("eel", $(crystalNum3))

        if (userTotal === computerChoice) {
            yay();
            console.log("winner")

        } else if (userTotal > computerChoice) {
            lose();
            console.log("looser")
        }
    })

    $("#crystal4").on("click", function() {
        userTotal = userTotal + crystalNum4;
        $('#myNum').html(userTotal);

        console.log("duck", $(crystalNum4))

        if (userTotal === computerChoice) {
            yay();
            console.log("winner")

        } else if (userTotal > computerChoice) {
            lose();
            console.log("looser")
        }


    });




});