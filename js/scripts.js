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
  this.scoreArray2 = [];
}
//this function breaks everything when conditional is added//
Player.prototype.scoring = function () {
  var die = Math.floor(Math.random() * 6 + 1);
  this.scoreArray1.push(die);
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
    var player = new Player(name1, name2);
    console.log(player);

    $("#roll").click(function(){
      player.scoring();
      var total = 0;
      for (var i = 0; i < player.scoreArray1.length; i++) {
        if (player.scoreArray1[i] === 1 && changePlayer === 1) {
          totalArray1 = [];
          alert("Player 1, you rolled a one!");
          changePlayer = 2;
        } else if (changePlayer === 1){
          total += player.scoreArray1[i];
          totalArray1.push(total);
          player.scoreArray1 = [];

          console.log(totalArray1);
          console.log(total);
          console.log(changePlayer);
          console.log(player.scoreArray1);
        } else if (player.scoreArray1[i] === 1 && changePlayer === 2){
          totalArray1 = [];
          alert("Player 2, you rolled a one!");
          changePlayer = 1;
          console.log(totalArray2);
        } else {
          total += player.scoreArray1[i];
          totalArray2.push(total);
          player.scoreArray1 = [];
          console.log(totalArray2);
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
      changePlayer = 2;
    });
  });
});
