//VARIABLES INITIAL
$(document).ready(function() {
  var wins = 0;
  $("#wins").text(wins);
  var losses = 0;
  $("#losses").text(losses);
  var gameOver = true;

  var userGuessNumber = 0;
  $("#userGuessNumber").text("?");

  var targetRandomNumber = 0
  $("#targetRandomNumber").text("?");


  var stone = [];


  $(".stone")
    .on("click", function() {

      var stoneValue = $(this).attr("value");

      if (gameOver) {
        $("#gameEnd").text(
          "if you want to play click on Start Game"
        );
      } else {
        userGuessNumber = userGuessNumber + stone[stoneValue];
        $("#userGuessNumber").text(userGuessNumber);

        if (userGuessNumber === targetRandomNumber) {
          wins++
          $("#wins").text(wins);
          $("#gameEnd").text("You won");
          gameOver = true;
        } else if (userGuessNumber > targetRandomNumber) {
          losses++
          $("#losses").text(losses);
          $("#gameEnd").text("You lost");
          gameOver = true;
        }
      }
    })

    $("#play").on("click", function() {
      reset();
    });


  function reset() {

    userGuessNumber = 0;
    $("#userGuessNumber").text(userGuessNumber);
   
    targetRandomNumber = Math.floor(Math.random() * 100) + 20;
    $("#targetRandomNumber").text(targetRandomNumber);

    $("#gameEnd").empty();

    stonesvalues();
    gameOver = false;
  
  }

  function stonesvalues() {
    stone = [];

    while (stone.length < 4) {
      var value = Math.floor(Math.random() * 12) + 1;
      console.log(value);
      if (stone.indexOf(value) === -1) {
        stone.push(value);
      }
    }
  }


});
