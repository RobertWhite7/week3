// Create a varable to hold the answer.
var answer;

//Set up the game.
function setupGame(){
    // clear out old values.
    $("#tbxGuess").text("");
    $("#message").text("");
    

    // Come up with an answer
    answer = parseInt(Math.random() * 99);
    console.log("Having fun yet?" + answer);
    // Hide and sHow the appropriate divs.
    $("#intro").show();
    $("#game").hide();

}

// Handle the guess.
function handleGuess(){
    var guess = $("#tbxGuess").val();
    if (+guess == answer){
        $("#message").text("How did you guess it right?!");
        
   }
    else{
         $("#message").text("Why do you even bother? Try again!!");
         $("#tbxGuess").val("");

        

    }
}

//Set up the page for the game/
function playGame(){
     $("#intro").hide();
    $("#game").show();
    
   $("#tbxGuess").focus();
}
$(function(){
    $("#startGame").on("click", playGame);
  
    $("#guess").on("click", handleGuess);
   
    setupGame();

});