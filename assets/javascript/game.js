//VARIABLES INITIAL

var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);
var gameOver = false;

var userGuessNumber = 0;

var targetRandomNumber = Math.floor(Math.random() * 100)+20;
console.log(targetRandomNumber);
$("#targetRandomNumber").text(targetRandomNumber);

stone = []
stone [0] = Math.floor(Math.random() * 12)+1;
stone [1] = Math.floor(Math.random() * 12)+1;
stone [2] = Math.floor(Math.random() * 12)+1;
stone [3] = Math.floor(Math.random() * 12)+1;
console.log("stones: " + stone);

//FUNCTIONS

$(".squares").on("click", ".stone", function() {
  var stoneValue = ($(this).attr("value"));

  if (gameOver) {
    document.querySelector("#gameEnd").innerHTML = "Game is over, if you want to play click on Start Game";
  }
  else { 
    userGuessNumber = userGuessNumber + stone[stoneValue];
    $("#userGuessNumber").text(userGuessNumber);

    if(userGuessNumber  === targetRandomNumber){
      wins = wins+1;
      $("#wins").text(wins);
      document.querySelector("#gameEnd").innerHTML = "You won";
      gameOver = true;
      }
    else if (userGuessNumber  > targetRandomNumber) {
      losses = losses+1;
      $("#losses").text(losses);
      document.querySelector("#gameEnd").innerHTML = "You lost";
      gameOver = true;
    }
    else {

    }
  }
}).on("click", ".restart", function() {
    reset();
});


// RESET

function reset() {
  userGuessNumber = 0;
  $("#userGuessNumber").text(userGuessNumber);
  targetRandomNumber = 0;
  stone = [];
  gameOver = false;

  targetRandomNumber = Math.floor(Math.random() * 100)+20;
  $("#targetRandomNumber").text(targetRandomNumber);

  stone = []
  stone [0] = Math.floor(Math.random() * 12)+1;
  stone [1] = Math.floor(Math.random() * 12)+1;
  stone [2] = Math.floor(Math.random() * 12)+1;
  stone [3] = Math.floor(Math.random() * 12)+1;

  console.log(stone);

  $("#gameEnd").empty();
}
