// BACK END //
var changePlayer = 1;
var totalArray1 = [];
var totalArray2 = [];
var winningArray1 = [];
var winningArray2 = [];

function Player(name1, name2){
  this.name1 = name1;
  this.name2 = name2;
  this.scoreArray1 = [];
}
//this function breaks everything when conditional is added//
Player.prototype.scoring = function () {
  var die = Math.floor(Math.random() * 6 + 1);
  this.scoreArray1.push(die);
};

function winner(name) {
  var win = 0;
  for (var i = 0; i < winningArray1.length; i++)
  win += winningArray1[i]
  if (win >= 100) {
    alert(name + " is the winner!");
  }
}
function winner2(name) {
  var win = 0;
  for (var i = 0; i < winningArray2.length; i++)
  win += winningArray2[i]
  if (win >= 100) {
    alert(name + " is the winner!");
  }
}
// FRONT END //
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    var player = new Player(name1, name2);
    console.log(player);

// WORKING AS INTENDED //

    $("#roll").click(function(){
      player.scoring();
      var total = 0;
      for (var i = 0; i < player.scoreArray1.length; i++) {
        if (player.scoreArray1[i] === 1 && changePlayer === 1) {
          totalArray1 = [];
          alert("Player 1, you rolled a one!");
          changePlayer = 2;
          player.scoreArray1 = [];
          console.log(changePlayer);
          console.log(totalArray2);
          console.log(totalArray1);
        } else if (player.scoreArray1[i] === 1 && changePlayer === 2){
          totalArray1 = [];
          alert("Player 2, you rolled a one!");
          changePlayer = 1;
          player.scoreArray1 = [];
          console.log(changePlayer);
          console.log(totalArray2);
          console.log(totalArray1);
        } else if (changePlayer === 1){
          total += player.scoreArray1[i];
          totalArray1.push(total);
          player.scoreArray1 = [];
          console.log(changePlayer);
          console.log(totalArray2);
          console.log(totalArray1);
        } else {
          total += player.scoreArray1[i];
          totalArray2.push(total);
          player.scoreArray1 = [];
          console.log(changePlayer);
          console.log(totalArray2);
          console.log(totalArray1);
        }

        }

    });
// ABOVE ^^^^^^ WORKING AS INTENDED //

    $("#hold").click(function(){
      if (changePlayer === 1) {


      var final1 = 0;
      for (var i = 0; i < totalArray1.length; i++) {
        final1 += totalArray1[i]

      }
      winningArray1.push(final1);
      winner(player.name1);
      console.log(winningArray1);
      changePlayer = 2;
    } else if (changePlayer === 2){
      var final1 = 0;
      for (var i = 0; i < totalArray2.length; i++) {
        final1 += totalArray2[i]

      }
      winningArray2.push(final1);
      winner2(player.name2);
      console.log(winningArray2);
      changePlayer = 1;
    }
    });
  });
});
