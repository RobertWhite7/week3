// Create a varable to hold the answer.
var answer;

//Set up the game.
function setupGame(){
    // clear out old values.
    $("#zipCode").text("");
    $("#message").text("");
    

    // Come up with an answer
    answer = parseInt(Math.random() * 99);
    console.log("Having fun yet?" + answer);
    // Hide and sHow the appropriate divs.
    $("#intro").show();
    $("#game").hide();

}

// Handle the guess.
function handleGuess(city, state, postalCode){
        var address = "";
        if (location.length != 0) {
            address = location;
            console.log(request);

        }
        else if(city.length != 0 && state != 0){
            address = city;
        }
        else{
            return;
        }
             var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBnKuo11baAEflbC-XhzUwxabQuawina9I";

            var request = {
                url: googleUrl,
                success: lookupLatLong_complete
            };

            $.ajax(request);
        }

}

//Set up the page for the game/
function playGame(){
     $("#intro").hide();
    $("#game").show();
    
   $("#zipCode").focus();
}
(function(){
    $("#startGame").on("click", playGame);
  
    $("#guess").on("click", handleGuess);
   
    setupGame();

});