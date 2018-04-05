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
  $("#dice").removeClass("diceFace1 diceFace2 diceFace3 diceFace4 diceFace5 diceFace6");
  if (die === 1) {
    $("#dice").addClass("diceFace1");
  } else if (die === 2) {
    // $("#dice").removeClass();
    $("#dice").addClass("diceFace2");
  } else if (die === 3) {
    // $("#dice").removeClass();
    $("#dice").addClass("diceFace3");
  } else if (die === 4) {
    // $("#dice").removeClass();
    $("#dice").addClass("diceFace4");
  } else if (die === 5) {
    // $("#dice").removeClass();
    $("#dice").addClass("diceFace5");
  } else if (die === 6) {
    // $("#dice").removeClass();
    $("#dice").addClass("diceFace6");
  } else {

  }

};

function winner(name) {
  var win = 0;
  for (var i = 0; i < winningArray1.length; i++)
  win += winningArray1[i]
  $(".p1Score").text(win);
  if (win >= 100) {
    alert(name + " is the winner!");
    $("#gameBoard").hide();
    $("#endGame").show();
    $(".playerName").text(name);
  }
}
function winner2(name) {
  var win = 0;
  for (var i = 0; i < winningArray2.length; i++)
  win += winningArray2[i]
  $(".p2Score").text(win);
  if (win >= 100) {
    alert(name + " is the winner!");
    $("#gameBoard").hide();
    $("#endGame").show();
    $(".playerName").text(name);
  }
}
// FRONT END //
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    $(".landingPage").hide();
    $("#gameBoard").show();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    var player = new Player(name1, name2);
    $(".playerName1").text(name1);
    $(".playerName2").text(name2);

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

        } else if (player.scoreArray1[i] === 1 && changePlayer === 2){
          totalArray1 = [];
          alert("Player 2, you rolled a one!");
          changePlayer = 1;
          player.scoreArray1 = [];

        } else if (changePlayer === 1){
          total += player.scoreArray1[i];
          totalArray1.push(total);
          player.scoreArray1 = [];

        } else {
          total += player.scoreArray1[i];
          totalArray2.push(total);
          player.scoreArray1 = [];
        }
      }
    });
    $("#hold").click(function(){
      if (changePlayer === 1) {
        var final1 = 0;
        for (var i = 0; i < totalArray1.length; i++) {
          final1 += totalArray1[i]
        }
        winningArray1.push(final1);
        winner(player.name1);
        console.log(winningArray1);
        totalArray1 = [];
        changePlayer = 2;
      } else if (changePlayer === 2){
        var final1 = 0;
        for (var i = 0; i < totalArray2.length; i++) {
          final1 += totalArray2[i]
        }
        winningArray2.push(final1);
        winner2(player.name2);
        console.log(winningArray2);
        totalArray2 = [];
        changePlayer = 1;
      }
    });
    $("#refresh").click(function () {
      location.reload();
    });
  });
});
