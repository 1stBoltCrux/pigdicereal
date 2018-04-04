// BACK END //
var totalArray1 = [];
var winningArray1 = [];

function Player1(name, score){
  this.name = name;
  this.score = score;
  this.scoreArray = [];
}
function Player2(name, score){
  this.name = name;
  this.score = score;
}

Player1.prototype.scoring = function () {
  var die = Math.floor(Math.random() * 6 + 1);
  this.scoreArray.push(die);
};

function winner() {
  var win = 0;
  for (var i = 0; i < winningArray1.length; i++)
  win += winningArray1[i]
  if (win >= 100) {
    alert("hallelujah");

  }
}

// FRONT END //
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    var score1 = 0;
    var score2 = 0;
    var playerOne = new Player1(name1, score1);
    console.log(playerOne);
    $("#roll").click(function(){
      playerOne.scoring();
      var total = 0;
      for (var i = 0; i < playerOne.scoreArray.length; i++) {
        if (playerOne.scoreArray[i] === 1) {
          totalArray1 = [];
          alert("You rolled a one!")
        } else {
          total +=  playerOne.scoreArray[i];
          totalArray1.push(total);
          playerOne.scoreArray = [];

          console.log(totalArray1);
          console.log(total);
          console.log(playerOne.scoreArray);
        }
      }
    });
    $("#hold").click(function(){
      var final1 = 0;
      for (var i = 0; i < totalArray1.length; i++) {
        final1 += totalArray1[i]

      }
      winningArray1.push(final1);
      winner();
      console.log(winningArray1);
      $("#output").text(final1);
      console.log(final1);
      });




      });


  });
